	// Use of this Script Requires the Tabletop.js Library. The Calling HTML File must include tabletop.js

// Address of the Google Sheets Database
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1piWHKU72s6uuq-8cGROitlvd3rZGqzWPwZfPPbz_VAE/edit?usp=sharing';

function init() {
Tabletop.init( { key: public_spreadsheet_url,
                 callback: showInfo,
                 simpleSheet: true } );
}

window.addEventListener('DOMContentLoaded', init)	// Calls method init when Sheets has loaded

// Method that gets called when data has been pulled from Google Sheets
function showInfo(data) {
	var sponsorName = [];
	var sponsorLogo = [];
	var sponsorDate = [];
	var sponsorDescription = [];
	var sponsorContact = [];
	var index = 0; // Line 2 is index 0 
	var htmlContent = "";
	//Builds the Forms and Addresses arrays using the Google Sheets Data
	//  var[index] = data[index]<COL_NAME>
	while (data[index] != null) {
		sponsorName[index] = data[index].Sponsor_Name;
		sponsorLogo[index] = data[index].Sponsor_Logo;
		sponsorDate[index] = data[index].Sponsor_Date;
		sponsorDescription[index] = data[index].Sponsor_Description;
		sponsorContact[index] = data[index].Sponsor_Contact;


		// Writes HTML code based on Form responses
		// alert(webURL[index] == undefined);
		// link = "";
		// link = webURL[index];

		htmlContent += '<span><img src="'
		+ sponsorLogo[index]
		+ '" style="length: 256px; width: 256px; background: rgba(255, 255, 255, .9); border-radius:10%; overflow:hidden; padding: 10px 10px 10px 10px;" alt="" /></span><h2><b>'
		+ sponsorName[index]
		+ '</h2></b><h4>Sponsor since '
		+ sponsorDate[index]
		+ '</h4><p>'
		+ sponsorDescription[index]
		+ '</p><a href="'
		+ sponsorContact[index]
		+ '" class="button special">Learn More About '
		+ sponsorName[index]
		+ '</a><br><br><br><br>';


		index++;

	}
	document.getElementById("htmlContentContainer").innerHTML = htmlContent;
}