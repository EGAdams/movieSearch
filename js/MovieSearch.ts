/* 
 * class MovieSearch
 */
 
 class MovieSearch {
      
    constructor() {
                
        /*
         * movie title div
         */
        let outerDiv = document.createElement("div");
        outerDiv.className = "col-lg-12";
        
        /*
         * the artist
         */
        let spider = Spider.getInstance();
        
        let bootStrapComponentDiv = document.createElement("div");
        bootStrapComponentDiv.className = "bs-component";
        
        let searchForm = document.createElement("form");
        searchForm.className    = "well form-search";
        searchForm.id           = "search-by-title-form";
        // searchForm.onsubmit = alert("submitting!");//spider.drawMovieRows;
        
        let fieldSet = document.createElement("fieldset")
        
        let legend = document.createElement("legend");
        legend.innerHTML = "Search By Movie Title";
        
        fieldSet.appendChild(legend);
        
        let inputDiv = document.createElement("div");
        
        let label = document.createElement("label");
        label.className = "control-label input_element";
        label.innerHTML = "Movie Title";
        
        let searchButton = document.createElement("button");
        searchButton.id = "search-by-title-button";
        searchButton.type = "button";
        searchButton.className = "btn-sm btn-primary";
        searchButton.innerHTML = "Search";
        searchButton.addEventListener("click", (e: Event) => spider.drawMovieRows(e));
        
        let resetButton = document.createElement("button");
        resetButton.id = "search-by-title-reset";
        resetButton.type = "button";
        resetButton.className = "btn-sm input_element";
        resetButton.innerHTML = "Reset";
        resetButton.addEventListener("click", (e: Event) => spider.resetSearch(true));
        
        let inputText = document.createElement("input");
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
        
        let motherDiv = document.getElementById("origin");
        motherDiv.appendChild(outerDiv);
        
        
    }
 }
 
 
 

