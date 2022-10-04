# Setup :-

1.) Add a script tag to your project in your head tag with defer attribute

2.) add the src attribute to of script tag to the library file

        Eg. <script src="./minified/connection.min.js"></script>

# Usage :- 

    This library provides following functions :-

        1.) getRequest() : Sends a get request
        
            This method takes one parameter :-
                        a.) endpoint : api endpoint url

        2.) postRequest() : Sends a post request
        
            This method takes two parameters :-
                    
                        a.) endpoint : api endpoint url
                        b.) data (optional) : data to be sent to the api endpoint. Default is empty object.
        
        3.) putRequest() : Sends a put Request
        
            This method takes two parameters :-
                    
                        a.) endpoint : api endpoint url
                        b.) data (optional) : data to be sent to the api endpoint. Default is empty object.


        4.) deleteRequest() : Sends a delete request
        
            This method takes one parameter :-
                    
                        a.) endpoint : api endpoint url