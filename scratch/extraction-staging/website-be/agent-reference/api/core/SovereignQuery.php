<?php
namespace Sovereign\Core;

/**
 * Sovereign Query Builder
 * 
 * Provides a fluent, chainable interface for building PostgREST queries.
 * Mimics the syntax of supabase-js: $api->from('table')->select('*')->eq('id', 1)->get();
 */

class SovereignQuery {
    private $client;
    private $table;
    private $select = '*';
    private $filters = [];
    private $orders = [];
    private $limit = null;
    private $offset = null;
    private $single = false;

    public function __construct($client, $table) {
        $this->client = $client;
        $this->table = $table;
    }

    public function select($columns = '*') {
        $this->select = $columns;
        return $this;
    }

    public function eq($column, $value) {
        $formattedValue = $this->formatValue($value);
        $this->filters[] = "{$column}=eq." . urlencode($formattedValue);
        return $this;
    }

    public function neq($column, $value) {
        $formattedValue = $this->formatValue($value);
        $this->filters[] = "{$column}=neq." . urlencode($formattedValue);
        return $this;
    }

    public function gt($column, $value) {
        $formattedValue = $this->formatValue($value);
        $this->filters[] = "{$column}=gt." . urlencode($formattedValue);
        return $this;
    }

    public function ilike($column, $pattern) {
        $this->filters[] = "{$column}=ilike." . urlencode($pattern);
        return $this;
    }

    public function filter($column, $operator, $value) {
        $formattedValue = $this->formatValue($value);
        $this->filters[] = "{$column}={$operator}." . urlencode($formattedValue);
        return $this;
    }

    public function or($filterString) {
        $this->filters[] = "or=({$filterString})";
        return $this;
    }

    public function order($column, $ascending = true) {
        $dir = $ascending ? 'asc' : 'desc';
        $this->orders[] = "{$column}.{$dir}";
        return $this;
    }

    public function limit($limit) {
        $this->limit = $limit;
        return $this;
    }

    public function range($from, $to) {
        $this->offset = $from;
        $this->limit = ($to - $from) + 1;
        return $this;
    }

    public function single() {
        $this->single = true;
        return $this;
    }

    private function formatValue($value) {
        if ($value === true) return 'true';
        if ($value === false) return 'false';
        if ($value === null) return 'null';
        return (string)$value;
    }

    public function get($headers = []) {
        $params = [];
        $params[] = "select=" . urlencode($this->select);
        
        foreach ($this->filters as $f) {
            $params[] = $f;
        }

        if (!empty($this->orders)) {
            $params[] = "order=" . implode(',', $this->orders);
        }

        if ($this->limit !== null) {
            $params[] = "limit=" . $this->limit;
        }

        if ($this->offset !== null) {
            $params[] = "offset=" . $this->offset;
        }

        if ($this->single) {
            $headers[] = "Accept: application/vnd.pgrst.object+json";
            // NOTE: On some PostgREST versions, we might need 'Prefer: count=none' or 'Prefer: params=single'
        }

        $queryString = implode('&', $params);
        $response = $this->client->request($this->table . ($queryString ? '?' . $queryString : ''), 'GET', null, 'return=representation', $headers);

        // If 'single' was requested, we return the data object directly if 2xx
        if ($this->single) {
            $status = $response['status'] ?? 500;
            return ($status >= 200 && $status < 300) ? $response['data'] : null;
        }

        return $response;
    }

    /**
     * INSERT: Create one or multiple rows.
     * Usage: $api->from('table')->insert(['col' => 'val'])->get();
     */
    public function insert($values) {
        $response = $this->client->request($this->table, 'POST', $values);
        
        $status = $response['status'] ?? 500;
        if ($status < 200 || $status >= 300) {
            return ['data' => [], 'error' => $response['data'] ?? null];
        }
        
        return $response;
    }

    /**
     * UPDATE: Update rows matching filters.
     * Usage: $api->from('table')->eq('id', 1)->update(['col' => 'newVal'])->get();
     */
    public function update($values) {
        $queryString = implode('&', $this->filters);
        $path = $this->table . ($queryString ? '?' . $queryString : '');
        $response = $this->client->request($path, 'PATCH', $values);
        
        $status = $response['status'] ?? 500;
        if ($status < 200 || $status >= 300) {
            return ['data' => [], 'error' => $response['data'] ?? null];
        }
        
        return $response;
    }

    /**
     * DELETE: Remove rows matching filters.
     * Usage: $api->from('table')->eq('id', 1)->delete()->get();
     */
    public function delete() {
        $queryString = implode('&', $this->filters);
        $path = $this->table . ($queryString ? '?' . $queryString : '');
        $response = $this->client->request($path, 'DELETE');
        
        $status = $response['status'] ?? 500;
        if ($status < 200 || $status >= 300) {
            return ['data' => [], 'error' => $response['data'] ?? null];
        }
        
        return $response;
    }
}
?>
