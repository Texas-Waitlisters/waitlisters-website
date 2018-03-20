	// Use of this Script Requires the Tabletop.js Library. The Calling HTML File must include tabletop.js

// Address of the Google Sheets Database
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1nG3_xi1nhKoONUNKfNZ0ZeQBNH3cLUVMnLXN03wPl2M/edit#gid=0';

function init() {
Tabletop.init( { key: public_spreadsheet_url,
                 callback: showInfo,
                 simpleSheet: true } );
}

window.addEventListener('DOMContentLoaded', init)	// Calls method init when Sheets has loaded

// Method that gets called when data has been pulled from Google Sheets
function showInfo(data) {
	var picURL = [];
	var memName = []; 
	var memBio = [];
	var gitURL = []; 
	var linkedInURL = [];
	var memEmail = [];
	var resumeURL = [];
	var webURL = [];
	var index = 0; // Line 2 is index 0 
	var htmlContent = "";
	//Builds the Forms and Addresses arrays using the Google Sheets Data
	//  var[index] = data[index]<COL_NAME>
	while (data[index] != null) {
		picURL[index] = data[index].Picture_URL;
		memName[index] = data[index].Member_Name;
		memBio[index] = data[index].Member_Bio;
		gitURL[index] = data[index].Github_URL;
		linkedInURL[index] = data[index].LinkedIn_URL;
		memEmail[index] = data[index].Member_Email;
		resumeURL[index] = data[index].Resume_URL;


		// Writes HTML code based on Form responses
		// alert(webURL[index] == undefined);
		link = "";
		link = webURL[index];

		htmlContent += '<span class="avatar"><img src="'
		+ picURL[index]
		+ '" style="length: 256px; width: 256px" alt="" /></span><h2>'
		+ memName[index]
		+ '</h2><p class="biography">'
		+ memBio[index]
		+ '</p><p><a href="'
		+ gitURL[index]
		+ '" target="_blank">Github</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="'
		+ linkedInURL[index]
		+ '" target=_blank">LinkedIn</a>&nbsp;&nbsp;&nbsp<a href="' 
		+ memEmail[index]
		+ '">Email</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="'
		+ resumeURL[index]
		+ '" target="_blank">Resume</a></p><br><br>';


		index++;

	}
	document.getElementById("htmlContentContainer").innerHTML = htmlContent;
}