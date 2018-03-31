	// Use of this Script Requires the Tabletop.js Library. The Calling HTML File must include tabletop.js

// Address of the Google Sheets Database
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1zbdOMY-aY1y2MH-4qsjJ0ueDr0TXP16eodMSCdgc6cQ/edit?usp=sharing';

function init() {
Tabletop.init( { key: public_spreadsheet_url,
                 callback: showInfo,
                 simpleSheet: true } );
}

window.addEventListener('DOMContentLoaded', init)	// Calls method init when Sheets has loaded

// Method that gets called when data has been pulled from Google Sheets
function showInfo(data) {
	var subName = [];
	var subURL = [];
	var subDesc = [];
	var pcDescription = [];
	var index = 0; // Line 2 is index 0 
	var htmlContent = "<tbody>";
	//Builds the Forms and Addresses arrays using the Google Sheets Data
	//  var[index] = data[index]<COL_NAME>
	while (data[index] != null) {
		subName[index] = data[index].Subdomain_Name;
		subURL[index] = data[index].Subdomain_URL;
		subDesc[index] = data[index].Subdomain_Description;


		// Writes HTML code based on Form responses
		// alert(webURL[index] == undefined);
		// link = "";
		// link = webURL[index];

		htmlContent += '<tr><td>'
		+ subName[index]
		+ '</td><td>'
		+ '<a href="' + subURL[index] + '">' + subURL[index] + '</a>'
		+ '</td><td>'
		+ subDesc[index]
		+ '</td></tr>';


		index++;

	}
	document.getElementById("htmlContentContainer").innerHTML = htmlContent;
}