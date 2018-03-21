	// Use of this Script Requires the Tabletop.js Library. The Calling HTML File must include tabletop.js

// Address of the Google Sheets Database
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1LvQAFKPG1r3AiDkCoAvanTLAmB5IZciKzJNzEaiybIk/edit#gid=0';

function init() {
Tabletop.init( { key: public_spreadsheet_url,
                 callback: showInfo,
                 simpleSheet: true } );
}

window.addEventListener('DOMContentLoaded', init)	// Calls method init when Sheets has loaded

// Method that gets called when data has been pulled from Google Sheets
function showInfo(data) {
	var projLogo = [];
	var projTitle = [];
	var devpostURL = []; 
	var madeFor = [];
	var hackathonURL = []; 
	var commentary = [];
	var commentary2 = [];
	var resumeURL = [];
	var webURL = [];
	var index = 0; // Line 2 is index 0 
	var htmlContent = "";
	//Builds the Forms and Addresses arrays using the Google Sheets Data
	//  var[index] = data[index]<COL_NAME>
	while (data[index] != null) {
		projLogo[index] = data[index].Project_Logo;
		projTitle[index] = data[index].Project_Title;
		devpostURL[index] = data[index].Devpost_URL;
		madeFor[index] = data[index].made_for_Hackathon;
		hackathonURL[index] = data[index].Hackathon_URL;
		commentary[index] = data[index].Commentary;
		commentary2[index] = data[index].Commentary2;


		// Writes HTML code based on Form responses
		// alert(webURL[index] == undefined);
		link = "";
		link = webURL[index];

		htmlContent += '<span><img src="'
		+ projLogo[index]
		+ '" style="length: 256px; width: 256px; background: rgba(255, 255, 255, .9); border-radius:10%; overflow:hidden; padding: 10px 10px 10px 10px;" alt="" /></span>' 
		+ '<p><b><a href="'
		+ devpostURL[index]
		+ '" target="_blank">'
		+ projTitle[index]
		+ '</a> made for <b><a href="'
		+ hackathonURL[index]
		+ '">'
		+ madeFor[index]
		+ '</a></h4></p><h4>'
		+ commentary[index]
		+ '</h4></p><h4>' 
		+ commentary2[index]
		+ '</h4></p><br>'
	;


		index++;

	}
	document.getElementById("htmlContentContainer").innerHTML = htmlContent;
}