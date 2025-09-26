<?php
/**
 * TVB Social Links Block - Server-side render
 * 
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 * @return string Returns the block output.
 */

// Exit if accessed directly
defined( 'ABSPATH' ) || exit;

// Das ist der Schlüssel! Diese Funktion wird automatisch aufgerufen
// wenn der Block gerendert wird (definiert in block.json "render": "file:./render.php")
return file_get_contents( __DIR__ . '/render.html' );