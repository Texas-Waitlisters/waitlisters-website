	// Use of this Script Requires the Tabletop.js Library. The Calling HTML File must include tabletop.js

// Address of the Google Sheets Database
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1E4FiRe8tG_8qWenpKSUrWRVwLIjwQsocyG-wCrrN7tY/edit?usp=sharing';

function init() {
Tabletop.init( { key: public_spreadsheet_url,
                 callback: showInfo,
                 simpleSheet: true } );
}

window.addEventListener('DOMContentLoaded', init)	// Calls method init when Sheets has loaded

// Method that gets called when data has been pulled from Google Sheets
function showInfo(data) {
	var navItem = [];
	var navURL = [];
	var index = 0; // Line 2 is index 0 
	var htmlContent = "";
	//Builds the Forms and Addresses arrays using the Google Sheets Data
	//  var[index] = data[index]<COL_NAME>
	while (data[index] != null) {
		navItem[index] = data[index].Navbar_Item_Name;
		navURL[index] = data[index].Navbar_Item_URL;


		// Writes HTML code based on Form responses
		// alert(webURL[index] == undefined);
		// link = "";
		// link = webURL[index];

		htmlContent += '<li><a href="'
		+ navURL[index]
		+ '" class="active">'
		+ navItem[index]
		+ '</a></li>';
		


		index++;

	}
	document.getElementById("navbarContainer").innerHTML = htmlContent;
}