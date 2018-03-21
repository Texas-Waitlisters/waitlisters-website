	// Use of this Script Requires the Tabletop.js Library. The Calling HTML File must include tabletop.js

// Address of the Google Sheets Database
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1MI58PlxLxZUPZZY-Nkr-v-ZocV9_XaDX0DRbOuYmTys/edit?usp=sharing';

function init() {
Tabletop.init( { key: public_spreadsheet_url,
                 callback: showInfo,
                 simpleSheet: true } );
}

window.addEventListener('DOMContentLoaded', init)	// Calls method init when Sheets has loaded

// Method that gets called when data has been pulled from Google Sheets
function showInfo(data) {
	var pcName = [];
	var pcDate = [];
	var pcTeamMems = [];
	var pcDescription = [];
	var index = 0; // Line 2 is index 0 
	var htmlContent = "";
	//Builds the Forms and Addresses arrays using the Google Sheets Data
	//  var[index] = data[index]<COL_NAME>
	while (data[index] != null) {
		pcName[index] = data[index].PC_Name;
		pcDate[index] = data[index].PC_Date;
		pcTeamMems[index] = data[index].PC_Team_Members;
		pcDescription[index] = data[index].PC_Description;


		// Writes HTML code based on Form responses
		// alert(webURL[index] == undefined);
		// link = "";
		// link = webURL[index];

		htmlContent += '<p><b>'
		+ pcName[index]
		+ ' ('
		+ pcDate[index]
		+ ')</p></b><h4>'
		+ pcTeamMems[index]
		+ " placed "
		+ pcDescription[index]
		+ '</h4></p><br>';


		index++;

	}
	document.getElementById("htmlContentContainer").innerHTML = htmlContent;
}