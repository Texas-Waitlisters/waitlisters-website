	// Use of this Script Requires the Tabletop.js Library. The Calling HTML File must include tabletop.js

// Address of the Google Sheets Database
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1LvQAFKPG1r3AiDkCoAvanTLAmB5IZciKzJNzEaiybIk/edit?usp=sharing';

function init() {
Tabletop.init( { key: public_spreadsheet_url,
                 callback: showInfo,
                 simpleSheet: true } );
}

window.addEventListener('DOMContentLoaded', init)	// Calls method init when Sheets has loaded

// Method that gets called when data has been pulled from Google Sheets
function showInfo(data) {
	var hackathonName = [];
	var projects = [];
	var developers = [];
	var hackathonURL = [];
  var hackathonReview = [];
	var index = 0; // Line 2 is index 0
	var htmlContent = '';
	//Builds the Forms and Addresses arrays using the Google Sheets Data
	//  var[index] = data[index]<COL_NAME>
	while (data[index] != null) {
		hackathonName[index] = data[index].Hackathon_Name;
		projects[index] = data[index].Projects;
		developers[index] = data[index].Developers;
		hackathonURL[index] = data[index].Hackathon_URL;
    hackathonReview[index] = data[index].Hackathon_Review;

      htmlContent += '<a href="'
        + hackathonURL[index] + '"><h2>'
        + hackathonName[index]
        + '</h2></a>'
        + '<h3><b>Projects: </b></h3>'
        + '<p>' + projects[index] + '</p>'
        + '<h3><b>Developers</b></h3>'
        + '<p>' + developers[index] + '</p>'
        + '<h3><b>Hackathon Review</b></h3>'
        + hackathonReview[index]
        + '<br><br><br>';
          index++;
      }
      // htmlContent += '</ol></div>';

  // htmlContent += '</ol></div>';
	document.getElementById("htmlContentContainer").innerHTML = htmlContent;



}
