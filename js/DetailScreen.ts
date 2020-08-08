/* 
 * class DetailScreen
 */
 
 class DetailScreen {
     
    rowClass    :string;
    movieTitle  :string;
    movieYear   :string;
    poster      :string;
    thisDiv     :any;
    plot        :string;
    
    constructor(movieTitleArg: string, movieYearArg: string, plotArg: string, posterArg: string, spider: Spider) {
        this.movieTitle = movieTitleArg;
        this.movieYear  = movieYearArg;
        this.rowClass   = "col-md-4 rowClass";
        this.thisDiv    = document.createElement("div");
        this.plot       = plotArg;
        this.poster     = posterArg;
        
        /*
         * poster div
         */
        let posterDiv = document.createElement("div");
        posterDiv.className = this.rowClass;
        
        let imageDiv = document.createElement("img");
        imageDiv.src =posterArg;
        posterDiv.appendChild(imageDiv);
         
        /*
         * title year plot div
         */
        let titleYearPlotDiv        = document.createElement("div");
        titleYearPlotDiv.className = this.rowClass;
        let detailString = "Title: <b>" + movieTitleArg + "</b><br>";
        detailString    += "Year: <b>"  + movieYearArg  + "</b><br>";
        detailString    += "<br>" + plotArg;
        detailString    += "<br><br><button id=\"return-to-search\" type=\"button\" class=\"btn-sm btn-primary\">Return to Search</button>"
        titleYearPlotDiv.innerHTML  = detailString; 
                         
        this.thisDiv.appendChild(posterDiv);
        this.thisDiv.appendChild(titleYearPlotDiv);
        this.thisDiv.className = "row";
        
        let motherDiv = document.getElementById("origin");
        motherDiv.appendChild(this.thisDiv);
        
        let returnToSearchButton = document.getElementById("return-to-search");
        returnToSearchButton.className = "btn-sm btn-primary input_element";
        returnToSearchButton.addEventListener("click", (e: Event) => spider.redrawSearch());
    }
 }
 
 
 

