	// Use of this Script Requires the Tabletop.js Library. The Calling HTML File must include tabletop.js

// Address of the Google Sheets Database
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1eWGwkLWIlRKTFY_9WOZhDj-PbUgs8Yok_PoiIfWVkCc/edit?usp=sharing';

function init() {
Tabletop.init( { key: public_spreadsheet_url,
                 callback: showInfo,
                 simpleSheet: true } );
}

window.addEventListener('DOMContentLoaded', init)	// Calls method init when Sheets has loaded

// Method that gets called when data has been pulled from Google Sheets
function showInfo(data) {
	var ctfName = [];
	var ctfDate = [];
	var ctfDescription = [];
	var index = 0; // Line 2 is index 0 
	var htmlContent = "";
	//Builds the Forms and Addresses arrays using the Google Sheets Data
	//  var[index] = data[index]<COL_NAME>
	while (data[index] != null) {
		ctfName[index] = data[index].CTF_Name;
		ctfDate[index] = data[index].CTF_Date;
		ctfDescription[index] = data[index].CTF_Description;


		// Writes HTML code based on Form responses
		// alert(webURL[index] == undefined);
		// link = "";
		// link = webURL[index];

		htmlContent += '<p><b>'
		+ ctfName[index]
		+ ' ('
		+ ctfDate[index]
		+ ')</p></b><h4>'
		+ ctfDescription[index]
		+ '</h4></p><br>';


		index++;

	}
	document.getElementById("htmlContentContainer").innerHTML = htmlContent;
}