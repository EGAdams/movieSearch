/*
 * class MovieSearch
 */
var MovieSearch = /** @class */ (function () {
    function MovieSearch() {
        /*
         * movie title div
         */
        var outerDiv = document.createElement("div");
        outerDiv.className = "col-lg-12";
        /*
         * the artist
         */
        var spider = Spider.getInstance();
        var bootStrapComponentDiv = document.createElement("div");
        bootStrapComponentDiv.className = "bs-component";
        var searchForm = document.createElement("form");
        searchForm.className = "well form-search";
        searchForm.id = "search-by-title-form";
        // searchForm.onsubmit = alert("submitting!");//spider.drawMovieRows;
        var fieldSet = document.createElement("fieldset");
        var legend = document.createElement("legend");
        legend.innerHTML = "Search By Movie Title";
        fieldSet.appendChild(legend);
        var inputDiv = document.createElement("div");
        var label = document.createElement("label");
        label.className = "control-label input_element";
        label.innerHTML = "Movie Title";
        var searchButton = document.createElement("button");
        searchButton.id = "search-by-title-button";
        searchButton.type = "button";
        searchButton.className = "btn-sm btn-primary";
        searchButton.innerHTML = "Search";
        searchButton.addEventListener("click", function (e) { return spider.drawMovieRows(e); });
        var resetButton = document.createElement("button");
        resetButton.id = "search-by-title-reset";
        resetButton.type = "button";
        resetButton.className = "btn-sm input_element";
        resetButton.innerHTML = "Reset";
        resetButton.addEventListener("click", function (e) { return spider.resetSearch(true); });
        var inputText = document.createElement("input");
        inputText.type = "text";
        inputText.id = "t";
        inputText.name = "t";
        inputText.className = "input-small input_element";
        inputDiv.appendChild(label);
        inputDiv.appendChild(inputText);
        inputDiv.appendChild(searchButton);
        inputDiv.appendChild(resetButton);
        searchForm.appendChild(fieldSet);
        searchForm.appendChild(inputDiv);
        bootStrapComponentDiv.appendChild(searchForm);
        outerDiv.appendChild(bootStrapComponentDiv);
        var motherDiv = document.getElementById("origin");
        motherDiv.appendChild(outerDiv);
    }
    return MovieSearch;
}());
