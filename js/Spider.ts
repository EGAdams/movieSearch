/* 
 * class Spider
 * 
 * this Singleton class draws rows and remembers stuff.
 * 
 */

class Spider {

    searchText: string;
    searchId: string;
    movieRows: Array<MovieRow> = [];
    phpUrl: string = "http://localhost/movieSearch/spider.php";
    private static instance: Spider;

    constructor() {

        /*
         * constructor
         */
        if (Spider.instance) {
            console.log("*** ERROR: - use Spider.getInstance");
        }

    }

    static getInstance(): Spider {
        Spider.instance = Spider.instance || new Spider();
        return Spider.instance;
    }

    public drawMovieRows(event: any) {

        // draw movie rows
        console.log("drawing movie rows...");
        while (this.movieRows.length > 0) {
            this.movieRows.pop();
        }
        this.searchText = document.getElementById("t").value;
        if (this.searchText.length == 0) {
            return;
        }
        this.sendAjax(this);
    }
    
    private sendAjax(spider: Spider): void {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                spider.readResponse(this.responseText);
            }
        };

        xhttp.open("GET", "http://localhost/yborTest/src/getMovieRows.php?search_text=" + spider.searchText);
        xhttp.send();
    }

    private sendDetailedAjax(spider: Spider): void {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                spider.readDetailedResponse(this.responseText);
            }
        };

        //console.log("sending command: http://www.omdbapi.com/?i=" + spider.searchId + "&r=JSON&apikey=ae2b1c0b&plot=full");
        //xhttp.open("GET", "http://www.omdbapi.com/?i=" + spider.searchId + "&r=JSON&apikey=ae2b1c0b&plot=full", true);
        xhttp.open("GET", "http://localhost/yborTest/src/getDetailedMovieInformation.php?search_id=" + spider.searchId);
        xhttp.send();
    }

    public readResponse(responseText: string) {
        console.log("reading response...");
        console.log(responseText);
        let jsonObject = JSON.parse(responseText);
        let searchResults = jsonObject;
        let movieRow;
        let motherDiv = document.getElementById("origin");
        let resultSet = document.createElement("div");
        resultSet.id = "resultSet";
        resultSet.className = "resultSet";
        this.resetSearch(false);
        motherDiv.appendChild(resultSet);
        for (let count = 0; count < searchResults.length; count++) {
            movieRow = new MovieRow(searchResults[count].Title, searchResults[count].Year, searchResults[count].imdbID, this);
            this.movieRows.push(movieRow);
        }
    }

    private drawPhpMovieRows(phpResponseText: string) {

        console.log("drawing movie rows...");
        console.log("php: " + phpResponseText);
    }

    public readDetailedResponse(responseText: string) {
        console.log("reading detailed response...");
        console.log(responseText);
        let jsonObject = JSON.parse(responseText);
        console.log("clearing screen...");
        this.clearScreen();
        let bitBucket = new DetailScreen(jsonObject.Title, jsonObject.Year, jsonObject.Plot, jsonObject.Poster, this);
    }

    private clearScreen() {
        let divToClear = document.getElementById("origin");
        if (divToClear != null) {
            while (divToClear.firstChild) {
                divToClear.removeChild(divToClear.firstChild);
            }
        }
    }

    public resetSearch(clearInput: boolean) {
        let divToClear = document.getElementById("resultSet");
        if (divToClear != null) {
            while (divToClear.firstChild) {
                divToClear.removeChild(divToClear.firstChild);
            }
        }

        if (clearInput == true) {
            document.getElementById("t").value = "";
        }
    }

    public drawMovieDetails(id: string) {
        console.log("drawing details for: " + id + "...");
        this.searchId = id;
        this.sendDetailedAjax(this);
    }

    public redrawSearch() {
        console.log("redrawing search...");
        this.clearScreen();
        let bitBucket = new MovieSearch();
        console.log("redrawing movie rows...");
        let motherDiv = document.getElementById("origin");
        let resultSet = document.createElement("div");
        resultSet.id = "resultSet";
        resultSet.className = "resultSet";
        motherDiv.appendChild(resultSet);
        let movieRow;
        for (let count = 0; count < this.movieRows.length; count++) {
            movieRow = new MovieRow(this.movieRows[count].movieTitle, this.movieRows[count].movieYear, this.movieRows[count].imdbID, this);
        }

    }



