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
  let ACTIVE = "Current"
	var picURL = [];
	var memName = [];
  var memStat = [];
	var memBio = [];
  var memSince = [];
	var memRole = [];
	var gitURL = [];
	var linkedInURL = [];
	var memEmail = [];
	var resumeURL = [];
	var webURL = [];
	var index = 0; // Line 2 is index 0
	var activeContent = "";
  var alumniContent = "";
	//Builds the Forms and Addresses arrays using the Google Sheets Data
	//  var[index] = data[index]<COL_NAME>
	while (data[index] != null) {
		picURL[index] = data[index].Picture_URL;
		memName[index] = data[index].Member_Name;
    memStat[index] = data[index].Member_Status;
		memRole[index] = data[index].Member_Role;
		memBio[index] = data[index].Member_Bio;
    memSince[index] = data[index].Member_Since;
		gitURL[index] = data[index].Github_URL;
		linkedInURL[index] = data[index].LinkedIn_URL;
		memEmail[index] = data[index].Member_Email;
		resumeURL[index] = data[index].Resume_URL;
		webURL[index] = data[index].Web_URL;

		// Writes HTML code based on Form responses
		// alert(webURL[index] == undefined);
		link = "";
		link = webURL[index];

    if (memStat[index] == ACTIVE) {
      activeContent += '<span class="avatar"><img src="'
      + picURL[index]
      + '" style="length: 256px; width: 256px" alt="" /></span>'
      + '<h2><b>' + memName[index] + '</b></h2>'
      + '<h3><b>' + memRole[index] + '</b></h3>'
      + '<p class="biography">' + memBio[index] + '</p>'
      + '<p>Member Since: ' + memSince[index] + '</p>'
      + '<ul><a href="' + gitURL[index]
      + '" class="icon fa-github alt" target="_blank"></a><a href="'
      + linkedInURL[index]
      + '" class="icon fa-linkedin alt" target="_blank"></a><a href="'
      + memEmail[index]
      + '" class="icon fa-envelope alt"></a><a href="'
      + resumeURL[index]
      + '" class="icon fa-file alt" target="_blank"></a><a href="'
      + webURL[index]
      + '" class="icon fa-globe alt" target="_blank"></a></ul></p><br><br>';
    } else {
      alumniContent += '<span class="avatar"><img src="'
      + picURL[index]
      + '" style="length: 256px; width: 256px" alt="" /></span>'
      + '<h2><b>' + memName[index] + '</b></h2>'
      + '<h3><b>' + memRole[index] + '</b></h3>'
      + '<p class="biography">' + memBio[index] + '</p>'
      + '<p>Member Since: ' + memSince[index] + '</p>'
      + '<ul><a href="' + gitURL[index]
      + '" class="icon fa-github alt" target="_blank"></a><a href="'
      + linkedInURL[index]
      + '" class="icon fa-linkedin alt" target="_blank"></a><a href="'
      + memEmail[index]
      + '" class="icon fa-envelope alt"></a><a href="'
      + resumeURL[index]
      + '" class="icon fa-file alt" target="_blank"></a><a href="'
      + webURL[index]
      + '" class="icon fa-globe alt" target="_blank"></a></ul></p><br><br>';
    }


		index++;

	}
	document.getElementById("activeContent").innerHTML = activeContent;
  document.getElementById("alumniContent").innerHTML = alumniContent;
}
