<?php

require_once __DIR__ . '/router.php';

get(route: '/', path_to_include: '/template/home.php');
get(route: '/contact', path_to_include: '/template/contact.php');

// get(route: '/product', path_to_include: '/template/product_detail.php');
// get(route: '/product/{id}', path_to_include: '/template/product_detail.php');