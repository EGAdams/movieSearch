
/* 
 * class MovieRow
 */
 
 class MovieRow {
     
    rowClass    :string;
    movieTitle  :string;
    movieYear   :string
    thisDiv     :any;
    imdbID      :string
    
    constructor(movieTitleArg: string, movieYearArg: string, imdbIDArg: string, spider: Spider) {
        this.movieTitle = movieTitleArg;
        this.movieYear  = movieYearArg;
        this.rowClass   = "col-md-4 rowClass";
        this.thisDiv    = document.createElement("div");
        this.imdbID     = imdbIDArg;
        
        /*
         * movie title div
         */
        let movieTitleDiv = document.createElement("div");
        movieTitleDiv.className = this.rowClass;
        movieTitleDiv.innerHTML = this.movieTitle;
        movieTitleDiv.addEventListener("click", (e: Event) => spider.drawMovieDetails(this.imdbID));
        
        /*
         * movie year div
         */
        let movieYearDiv        = document.createElement("div");
        movieYearDiv.className = this.rowClass;
        movieYearDiv.innerHTML  = this.movieYear; 
        movieYearDiv.addEventListener("click", (e: Event) => spider.drawMovieDetails(this.imdbID));
                         
        this.thisDiv.appendChild(movieTitleDiv);
        this.thisDiv.appendChild(movieYearDiv);
        this.thisDiv.className = "row";
        
        let motherDiv = document.getElementById("resultSet");
        motherDiv.appendChild(this.thisDiv);
    }
 }
 
 
 