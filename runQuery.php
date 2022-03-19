<?php
header( "Access-Control-Allow-Origin: *" );
require_once 'QueryRunner.php';
date_default_timezone_set( 'America/New_York' );

function mprint( $text ) { 
    file_put_contents(dirname(__FILE__) . "/register.log", date( "h:i:sa" ) . ": ".  $text . "\n", FILE_APPEND | LOCK_EX ); }

mprint( "reading sql..." );
$sql = $_GET[ "sql" ];
mprint( "sql sent to this script: " . $sql );

/* JSONObject */ function runQuery( /*String*/ $sql ) {
    mprint( "running query with sql:" . $sql . "..." );
    $queryRunner = new QueryRunner();
    mprint( "returning result..." );
    return $queryRunner->runQuery( $sql );
}

$result = json_encode( runQuery( $sql ));
mprint( "echoing result: " . $result . "..." );
echo $result;
mprint( "bye." );
?>
