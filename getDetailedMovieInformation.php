<?php
header("Access-Control-Allow-Origin: *");
require_once 'DetailedMovieInformation.php';

$search_id = $_GET["search_id"];

/**
 * public JSONObject getDetailedMovieInformation(String search_id);
 */

/* JSONObject */function getDetailedMovieInformation(/*String*/$search_id) {

$detailedMovieInformation = new DetailedMovieinformation();
return $detailedMovieInformation->getDetailedMovieInformation($search_id);
}

$result = json_encode(getDetailedMovieInformation($search_id));
echo $result;
?>