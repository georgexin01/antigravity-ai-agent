<?php
/**
 * Sovereign BaseModel — PostgREST-backed data access layer.
 *
 * Children set $table + optionally $embedDefault, then inherit
 * find/all/create/update/softDelete + the format() hook.
 */

namespace Sovereign\Models;

abstract class BaseModel
{
    protected \Sovereign\Core\SupabaseClient $api;
    protected string $table = '';
    protected string $embedDefault = '*';

    public function __construct(\Sovereign\Core\SupabaseClient $api, string $table)
    {
        $this->api   = $api;
        $this->table = $table;
    }

    /** Fetch one row by UUID primary key. */
    public function find(string $id, ?string $select = null): ?array
    {
        $row = $this->api->from($this->table)
            ->select($select ?? $this->embedDefault)
            ->eq('id', $id)
            ->eq('isDelete', 'false')
            ->single()
            ->get();

        return $row ? $this->format($row) : null;
    }

    /** Fetch rows with simple equality filters. */
    public function all(array $filters = [], ?string $select = null): array
    {
        $query = $this->api->from($this->table)
            ->select($select ?? $this->embedDefault)
            ->eq('isDelete', 'false');

        foreach ($filters as $col => $val) {
            $query->eq($col, $val);
        }

        $resp = $query->get();
        $rows = $resp['data'] ?? [];
        return array_map([$this, 'format'], $rows);
    }

    /** Paginated list. */
    public function paginate(int $page = 1, int $pageSize = 10, array $filters = []): array
    {
        $from = ($page - 1) * $pageSize;
        $to   = $from + $pageSize - 1;

        $query = $this->api->from($this->table)
            ->select($this->embedDefault)
            ->eq('isDelete', 'false')
            ->range($from, $to);

        foreach ($filters as $col => $val) {
            $query->eq($col, $val);
        }

        $resp = $query->get();
        $rows = $resp['data'] ?? [];

        return [
            'items'    => array_map([$this, 'format'], $rows),
            'page'     => $page,
            'pageSize' => $pageSize,
            'total'    => count($rows),
        ];
    }

    /**
     * Insert a single row.
     * $returnRow=true  → Prefer: return=representation (needs SELECT RLS on inserted row)
     * $returnRow=false → Prefer: return=minimal (no SELECT required)
     */
    public function create(array $data, bool $returnRow = true): ?array
    {
        $prefer = $returnRow ? 'return=representation' : 'return=minimal';
        $resp = $this->api->request($this->table, 'POST', $data, $prefer);
        if (($resp['status'] ?? 500) >= 400) return null;

        if (!$returnRow) return ['created' => true];

        $rows = $resp['data'] ?? [];
        $row  = \is_array($rows) && isset($rows[0]) ? $rows[0] : $rows;
        return $row ? $this->format($row) : null;
    }

    /** Partial update by id. */
    public function update(string $id, array $data): ?array
    {
        $resp = $this->api->request(
            $this->table . '?id=eq.' . urlencode($id),
            'PATCH',
            $data
        );
        if (($resp['status'] ?? 500) >= 400) return null;

        $rows = $resp['data'] ?? [];
        $row  = is_array($rows) && isset($rows[0]) ? $rows[0] : $rows;
        return $row ? $this->format($row) : null;
    }

    /** Soft-delete by id (sets isDelete=true). */
    public function softDelete(string $id): bool
    {
        $resp = $this->api->request(
            $this->table . '?id=eq.' . urlencode($id),
            'PATCH',
            ['isDelete' => true]
        );
        return ($resp['status'] ?? 500) < 400;
    }

    /**
     * Data-shape hook — child overrides to:
     *   - decode JSONB columns
     *   - prepend storage domain to image paths
     *   - cast booleans from PostgREST string form
     *   - hydrate related records
     */
    protected function format(array $row): array
    {
        return $row;
    }
}
