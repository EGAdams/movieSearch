/*
 * class Spider
 *
 * this Singleton class draws rows and remembers stuff.
 *
 */
var Spider = /** @class */ (function () {
    function Spider() {
        this.movieRows = [];
        this.phpUrl = "http://localhost/movieSearch/spider.php";
        /*
         * constructor
         */
        if (Spider.instance) {
            console.log("*** ERROR: - use Spider.getInstance");
        }
    }
    Spider.getInstance = function () {
        Spider.instance = Spider.instance || new Spider();
        return Spider.instance;
    };
    Spider.prototype.drawMovieRows = function (event) {
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
    };
    Spider.prototype.sendAjax = function (spider) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                spider.readResponse(this.responseText);
            }
        };
        xhttp.open("GET", "http://americansjewelry.com/test/getMovieRows.php?search_text=" + spider.searchText);
        xhttp.send();
    };
    Spider.prototype.sendDetailedAjax = function (spider) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                spider.readDetailedResponse(this.responseText);
            }
        };
        
        xhttp.open("GET", "http://americansjewelry.com/test/getDetailedMovieInformation.php?search_id=" + spider.searchId);
        xhttp.send();
    };
    Spider.prototype.readResponse = function (responseText) {
        console.log("reading response...");
        console.log(responseText);
        var jsonObject = JSON.parse(responseText);
        var searchResults = jsonObject;
        var movieRow;
        var motherDiv = document.getElementById("origin");
        var resultSet = document.createElement("div");
        resultSet.id = "resultSet";
        resultSet.className = "resultSet";
        this.resetSearch(false);
        motherDiv.appendChild(resultSet);
        for (var count = 0; count < searchResults.length; count++) {
            movieRow = new MovieRow(searchResults[count].Title, searchResults[count].Year, searchResults[count].imdbID, this);
            this.movieRows.push(movieRow);
        }
    };
    Spider.prototype.drawPhpMovieRows = function (phpResponseText) {
        console.log("drawing movie rows...");
        console.log("php: " + phpResponseText);
    };
    Spider.prototype.readDetailedResponse = function (responseText) {
        console.log("reading detailed response...");
        console.log(responseText);
        var jsonObject = JSON.parse(responseText);
        console.log("clearing screen...");
        this.clearScreen();
        var bitBucket = new DetailScreen(jsonObject.Title, jsonObject.Year, jsonObject.Plot, jsonObject.Poster, this);
    };
    Spider.prototype.clearScreen = function () {
        var divToClear = document.getElementById("origin");
        if (divToClear != null) {
            while (divToClear.firstChild) {
                divToClear.removeChild(divToClear.firstChild);
            }
        }
    };
    Spider.prototype.resetSearch = function (clearInput) {
        var divToClear = document.getElementById("resultSet");
        if (divToClear != null) {
            while (divToClear.firstChild) {
                divToClear.removeChild(divToClear.firstChild);
            }
        }
        if (clearInput == true) {
            document.getElementById("t").value = "";
        }
    };
    Spider.prototype.drawMovieDetails = function (id) {
        console.log("drawing details for: " + id + "...");
        this.searchId = id;
        this.sendDetailedAjax(this);
    };
    Spider.prototype.redrawSearch = function () {
        console.log("redrawing search...");
        this.clearScreen();
        var bitBucket = new MovieSearch();
        console.log("redrawing movie rows...");
        var motherDiv = document.getElementById("origin");
        var resultSet = document.createElement("div");
        resultSet.id = "resultSet";
        resultSet.className = "resultSet";
        motherDiv.appendChild(resultSet);
        var movieRow;
        for (var count = 0; count < this.movieRows.length; count++) {
            movieRow = new MovieRow(this.movieRows[count].movieTitle, this.movieRows[count].movieYear, this.movieRows[count].imdbID, this);
        }
    };
    return Spider;
}());
