/*
 * class DetailScreen
 */
var DetailScreen = /** @class */ (function () {
    function DetailScreen(movieTitleArg, movieYearArg, plotArg, posterArg, spider) {
        this.movieTitle = movieTitleArg;
        this.movieYear = movieYearArg;
        this.rowClass = "col-md-4 rowClass";
        this.thisDiv = document.createElement("div");
        this.plot = plotArg;
        this.poster = posterArg;
        /*
         * poster div
         */
        var posterDiv = document.createElement("div");
        posterDiv.className = this.rowClass;
        var imageDiv = document.createElement("img");
        imageDiv.src = posterArg;
        posterDiv.appendChild(imageDiv);
        /*
         * title year plot div
         */
        var titleYearPlotDiv = document.createElement("div");
        titleYearPlotDiv.className = this.rowClass;
        var detailString = "Title: <b>" + movieTitleArg + "</b><br>";
        detailString += "Year: <b>" + movieYearArg + "</b><br>";
        detailString += "<br>" + plotArg;
        detailString += "<br><br><button id=\"return-to-search\" type=\"button\" class=\"btn-sm btn-primary\">Return to Search</button>";
        titleYearPlotDiv.innerHTML = detailString;
        this.thisDiv.appendChild(posterDiv);
        this.thisDiv.appendChild(titleYearPlotDiv);
        this.thisDiv.className = "row";
        var motherDiv = document.getElementById("origin");
        motherDiv.appendChild(this.thisDiv);
        var returnToSearchButton = document.getElementById("return-to-search");
        returnToSearchButton.className = "btn-sm btn-primary input_element";
        returnToSearchButton.addEventListener("click", function (e) { return spider.redrawSearch(); });
    }
    return DetailScreen;
}());
