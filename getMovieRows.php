<?php
header("Access-Control-Allow-Origin: *");
require_once('MovieRows.php');
$search_text = $_GET["search_text"];


/**
 * public JSONObject getMovieRows(String search_text);
 */

/* JSONObject */function getMovieRows(/*String*/$search_text) {
    
    $movieRows = new MovieRows();
    return $movieRows->getMovieRows($search_text);
}

$result = json_encode(getMovieRows($search_text));
echo $result;
?>