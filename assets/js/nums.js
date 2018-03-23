	// Use of this Script Requires the Tabletop.js Library. The Calling HTML File must include tabletop.js

// Address of the Google Sheets Database
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1j0aY94Njvbe_ghy6Uktxx1Ni37nf7Ik4H1hCWbuoTy0/edit?usp=sharing';

function init() {
Tabletop.init( { key: public_spreadsheet_url,
                 callback: showInfo,
                 simpleSheet: true } );
}

window.addEventListener('DOMContentLoaded', init)	// Calls method init when Sheets has loaded

// Method that gets called when data has been pulled from Google Sheets
function showInfo(data) {
	var hackathonCt = [];
	var awardsCt = [];
	var projectsCt = [];
	var index = 0; // Line 2 is index 0 
	var htmlContent = "";
	//Builds the Forms and Addresses arrays using the Google Sheets Data
	//  var[index] = data[index]<COL_NAME>
	while (data[index] != null) {
		hackathonCt[index] = data[index].Hackathons_Ct;
		awardsCt[index] = data[index].Awards_Ct;
		projectsCt[index] = data[index].Projects_Ct;


		// Writes HTML code based on Form responses
		// alert(webURL[index] == undefindet);
		// link = "";
		// link = webURL[index];

		htmlContent += '<ul class="statistics"><li class="style1"><span class="icon fa-code"></span><strong>'
		+ hackathonCt
		+ '</strong> Hackathons</li><li class="style2"><span class="icon fa-trophy"></span><strong>'
		+ awardsCt
		+ '</strong> Awards</li><li class="style3"><span class="icon fa-folder"></span><strong>'
		+ projectsCt
		+ '</strong> Projects</li></ul>';


		index++;

	}
	document.getElementById("htmlContentContainer").innerHTML = htmlContent;
}