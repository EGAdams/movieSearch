<?php
/*
 *  class QueryRunner
 */
date_default_timezone_set( 'America/New_York' );

class QueryRunner {   
    private $connection = null;
    
    public function __construct() {
        $this->log( "constructing QueryRunner object..." ); 
        $this->connection = mysqli_connect("americansjewelry.com", "tinman72_4a4e_cg", "jan02@Th", "tinman72_demo_database"); }
    
    public function runQuery( $query ) {
        $this->log( "running query: " . $query . "..." );
        $result = $this->connection->query( $query );
        
        if ( $result->num_rows > 0 ) {
            $this->log( "got at least one row.  returning result: " . $result . "... " );
            return mysqli_fetch_assoc( $result );
        } else {
            $this->log( "returning no data..." );
            return "no data."; }}  
            
    private function log( $text ) {
            file_put_contents( dirname( __FILE__ ) . "/register.log", date( "h:i:sa" ) . ": ".  $text . "\n", FILE_APPEND | LOCK_EX ); }

}
?>
