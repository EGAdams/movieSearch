/*
 * class MovieRow
 */
var MovieRow = /** @class */ (function () {
    function MovieRow(movieTitleArg, movieYearArg, imdbIDArg, spider) {
        var _this = this;
        this.movieTitle = movieTitleArg;
        this.movieYear = movieYearArg;
        this.rowClass = "col-md-4 rowClass";
        this.thisDiv = document.createElement("div");
        this.imdbID = imdbIDArg;
        /*
         * movie title div
         */
        var movieTitleDiv = document.createElement("div");
        movieTitleDiv.className = this.rowClass;
        movieTitleDiv.innerHTML = this.movieTitle;
        movieTitleDiv.addEventListener("click", function (e) { return spider.drawMovieDetails(_this.imdbID); });
        /*
         * movie year div
         */
        var movieYearDiv = document.createElement("div");
        movieYearDiv.className = this.rowClass;
        movieYearDiv.innerHTML = this.movieYear;
        movieYearDiv.addEventListener("click", function (e) { return spider.drawMovieDetails(_this.imdbID); });
        this.thisDiv.appendChild(movieTitleDiv);
        this.thisDiv.appendChild(movieYearDiv);
        this.thisDiv.className = "row";
        var motherDiv = document.getElementById("resultSet");
        motherDiv.appendChild(this.thisDiv);
    }
    return MovieRow;
}());
