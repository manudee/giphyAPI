

var desserts = ["Tiramisu", "creme brulee", "Donuts" ];



// var giphy = 
// {	queryURL: "https://api.giphy.com/v1/gifs/search?q=",
// 	api_key: "dc6zaTOxFJmzC",
// 	q: value,
// 	limit: 10,
// 	rating: ""

// }






/* var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        value + "&api_key=dc6zaTOxFJmzC&limit=10";

*/



 function createButtons(){


 		$("#dessertItems").empty();

 	for (var i = 0; i < desserts.length; i++) {
 		
 		var a = $("<button>");
 		a.addClass("myDesserts btn btn-primary md-col-2 md-col-offset-2");
 		a.attr("data-name", desserts[i]);
 		a.text(desserts[i]);
 		
 		
 		$("#dessertItems").append(a);
 		console.log(desserts[i]);
 	}

 }





$(document).ready(function(){
 	createButtons();


 	$("#add-dessert").on("click", function(event){
		event.preventDefault();
		var newDessert = $("#dessert-input").val().trim();

		desserts.push(newDessert);
		
		createButtons();

	});


	$("body").on("click", ".myDesserts", function(){
		//write a function to get data from API and post the contents in desserts section

 		var value = $(this).attr("data-name");
 		console.log(value);
 		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        value + "&api_key=dc6zaTOxFJmzC&limit=10";


         $.ajax({
         	url: queryURL,
         	method: "GET"

         }).done(function(response){

         	var results = response.data;

         	console.log(results);

         	for (var i = 0; i < results.length; i++) {
         		console.log(results[i].images.fixed_height_still.url);

         		var rating = results[i].rating;

         		var p = $("<p>").text("Rating: " + results[i].rating);
         		var img = $("<img>");

				img.attr("src",results[i].images.fixed_height_still.url)
         		//personImage.attr("src", results[i].images.fixed_height.url);
         		//img.attr("data-still",results[i].images.fixed_height_still.url);
         		img.attr("data-animate",results[i].images.fixed_height.url);
         		img.attr("data-state", "still");
         		img.addClass("myClickedImages")

         		$("#desserts").prepend(img);
         		$("#desserts").prepend(p);
         		
         		
         	}
         	

         });

	});



	$("body").on("click", ".myClickedImages", function(){

		var state = $(this).attr("data-state");
		console.log("STATE IS " + state);

		if(state === "still")
		{	
			$(this).attr("src", $(this).attr("data-animate"));	
			$(this).attr("data-state", "animate");	

		}

		else 
		{
			$(this).attr("src", $(this).attr("src"));	
			$(this).attr("data-state", "still");

		}



	});


 });


