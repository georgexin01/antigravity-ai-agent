<?php
session_start();
function get($route, $path_to_include)
{
  $request_uri = strtok($_SERVER['REQUEST_URI'], '?');

  // Normalize the route and request URI by removing trailing slashes
  $route = rtrim($route, '/');
  $request_uri = rtrim($request_uri, '/');

  // Check if the route has a dynamic part
  if (strpos($route, '{') !== false) {
    $dynamic_part = substr($route, strpos($route, '{') + 1, -1);
    $base_route = substr($route, 0, strpos($route, '{'));
    if (strpos($request_uri, $base_route) === 0) {
      $dynamic_value = substr($request_uri, strlen($base_route));
      $_GET[$dynamic_part] = $dynamic_value;
      include_once __DIR__ . $path_to_include;
      exit;
    }
  } else {
    if ($request_uri === $route) {
      include_once __DIR__ . $path_to_include;
      exit;
    }
  }
}
function post($route, $path_to_include)
{
  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    route($route, $path_to_include);
  }
}
function put($route, $path_to_include)
{
  if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
    route($route, $path_to_include);
  }
}
function patch($route, $path_to_include)
{
  if ($_SERVER['REQUEST_METHOD'] == 'PATCH') {
    route($route, $path_to_include);
  }
}
function delete($route, $path_to_include)
{
  if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    route($route, $path_to_include);
  }
}
function any($route, $path_to_include)
{
  route($route, $path_to_include);
}
function route($route, $path_to_include)
{
  $callback = $path_to_include;
  if (!is_callable($callback)) {
    if (!strpos($path_to_include, '.php')) {
      $path_to_include .= '.php';
    }
  }
  if ($route == "/404") {
    include_once __DIR__ . "/$path_to_include";
    exit();
  }
  $request_url = filter_var($_SERVER['REQUEST_URI'], FILTER_SANITIZE_URL);
  $request_url = rtrim($request_url, '/');
  $request_url = strtok($request_url, '?');
  $route_parts = explode('/', $route);
  $request_url_parts = explode('/', $request_url);
  array_shift($route_parts);
  array_shift($request_url_parts);
  if ($route_parts[0] == '' && count($request_url_parts) == 0) {
    include_once __DIR__ . "/$path_to_include";
    exit();
  }
  if (count($route_parts) != count($request_url_parts)) {
    return;
  }
  $parameters = [];
  for ($__i__ = 0; $__i__ < count($route_parts); $__i__++) {
    $route_part = $route_parts[$__i__];
    if (preg_match("/^[$]/", $route_part)) {
      $route_part = ltrim($route_part, '$');
      array_push($parameters, $request_url_parts[$__i__]);
      $$route_part = $request_url_parts[$__i__];
    } else if ($route_parts[$__i__] != $request_url_parts[$__i__]) {
      return;
    }
  }
  if (is_callable($callback)) {
    call_user_func_array($callback, $parameters);
    exit();
  }
  include_once __DIR__ . "/$path_to_include";
  exit();
}

function out($text)
{
  echo htmlspecialchars($text);
}
function set_csrf()
{
  if (! isset($_SESSION["csrf"])) {
    $_SESSION["csrf"] = bin2hex(random_bytes(50));
  }
  echo '<input type="hidden" name="csrf" value="' . $_SESSION["csrf"] . '">';
}
function is_csrf_valid()
{
  if (! isset($_SESSION['csrf']) || ! isset($_POST['csrf'])) {
    return false;
  }
  if ($_SESSION['csrf'] != $_POST['csrf']) {
    return false;
  }
  return true;
}
function active($currect_page)
{
  $url_array =  explode('/', $_SERVER['REQUEST_URI']);
  $url = end($url_array);
  if ($currect_page == $url) {
    echo 'active';
  }
}
