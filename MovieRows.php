<?php

class MovieRows {
    
    private $connection = null;
    
    public function __construct() {
        $this->connection = mysqli_connect("americansjewelry.com", "tinman72_wp", "ihopethisworks", "tinman72_demo_database");
    }
    
    public function getMovieRows($search_text) {
                    
        $jsonObject = $this->getSearchResults($search_text);  
                
        if ($jsonObject["search_results"] != null) {
            
            /*
             * parse response...
             */
            $json = json_decode($jsonObject["search_results"]); //, true);
            
            
            /*
             * pull out the search results and
             * return them to the browser
             */
            return $json;
            
            //return $searchArray;
        }
        
        /*
         * get movie rows with a curl call
         * and return search results...
         */
        
        /*
         * Get cURL resource
         */
        $curl = curl_init();
        
        /*
         * set options
         */ 
        curl_setopt_array($curl, [
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_URL => "http://www.omdbapi.com/?s=" . $search_text . "&r=JSON&apikey=ae2b1c0b",
            CURLOPT_USERAGENT => 'cURL Movie infromation Request'
        ]);
        
        /*
         *  send the request
         */
        $response = curl_exec($curl);
        
        /*
         * close request to clear up some resource
         */ 
        curl_close($curl);
        
        
        
        /*
         * parse response...
         */
        $jsonObject = json_decode($response, true);
        
        /*
         * pull out the search results and 
         * return them to the browser
         */
        $searchArray = $jsonObject["Search"];
        
        /*
         *  serialize the json object  maybe not serialize?
         *  send it to the database with a serial number of the search text.
         *  save response...
         */
        $this->saveJsonObject($search_text, json_encode($searchArray));
        
        return $searchArray;
    } 
    
    private function existsInDatabase($search_textArg) {
        
        return false; // TODO: fix this!
        
        
        // get the boolean...
        
    }
    
    private function getSearchResults($search_textArg) {
        
        $sql = "SELECT search_results FROM movie_data WHERE search_text ='" . $search_textArg . "'";
        $result = $this->connection->query($sql);
        
        if ($result->num_rows > 0) {   
            return mysqli_fetch_assoc($result);
        }else{
            return null;
        }
    }
    
    private function saveJsonObject($search_text, $searchArray) {
        $sql = "INSERT INTO movie_data(search_text, search_results) VALUES ('" . $search_text . "', '" . $searchArray . "')";
        $this->connection->query($sql);
        $this->connection->close();
    }
}
?>