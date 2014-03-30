//alert("JavaScript works!");

// Adilson Dos Reis E Almeida
// SDI 1403
// Project 4
// Problem Solving Functions

//global variables
var stringReturn


//String Function 1

var getpattern = function(argpattern) {

	var stringLength = argpattern.length;
	
		for (var i = 11; i = stringLength; i) {
		
			if (argpattern.substring(0,2) < 1000) {
			
				if (argpattern.charAt(3) = "-") {
				
					if (argpattern.charAt(7) = "-") {
					
					console.log(argpattern + " is a phone number.");
				};
			};
		};
		console.log(argpattern + " is not a phone number.");
	};
}; 

// Is this a URL function
var getURL = function (argURL) {

	if (argURL.charAt(0) = "h") {
	
		if (argURL.charAt(1) = "t") {
		
			if (argURL.charAt(2) = "t") {
			
				if (argURL.charAt(3) = "p") {
				
					console.log( argURL + " is a website.");
				};
			};
		};
	};
	console.log( argURL + " is not a website.");
};

//main code with function calls and output
stringReturn = getpattern("123-456-7890")

stringReturn = getURL("http://www.juliashomestyle.com")