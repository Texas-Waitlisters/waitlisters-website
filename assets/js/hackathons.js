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
  var hackathonPhoto = [];
	var projects = [];
  var awards = [];
	var developers = [];
	var hackathonURL = [];
  var hackathonReview = [];
	var index = 0; // Line 2 is index 0
	var htmlContent = '';
  var projectsContent = "";
  var awardsContent = "";
	//Builds the Forms and Addresses arrays using the Google Sheets Data
	//  var[index] = data[index]<COL_NAME>
	while (data[index] != null) {
		hackathonName[index] = data[index].Hackathon_Name;
    hackathonPhoto[index] = data[index].Hackathon_Photo;
		projects[index] = data[index].Projects;
    awards[index] = data[index].Awards;
		developers[index] = data[index].Developers;
		hackathonURL[index] = data[index].Hackathon_URL;
    hackathonReview[index] = data[index].Hackathon_Review;

    // first row
    if (index == 0) {
      htmlContent += '<a href="'
        + hackathonURL[index] + '"><h2>'
        + hackathonName[index]
        + '</h2></a>'
        + '<h3><b>Project(s)</b></h3><p>'
        projectsContent += projects[index] + ' ('
        + developers[index] + ')</p>';
      if (awards[index].length > 0) {
        awardsContent += '<h3><b>Awards </b></h3>'
        + '<p>' + awards[index] + ' (' + projects[index] + ')</p>';
      }
        // htmlContent = htmlContent + projectsContent + awardsContent;
        // htmlContent += '<br><br>'
    // further rows
    } else if (index > 0) {
      if (hackathonName[index] != hackathonName[index-1]) {
        projectsContent = "";
        awardsContent = "";
        htmlContent += '<a href="'
          + hackathonURL[index] + '"><h2>'
          + hackathonName[index]
          + '</h2></a>'
          projectsContent += '<h3><b>Project(s)</b></h3><p>'
          + projects[index] + ' ('
          + developers[index] + ')</p>';
          if (awards[index].length > 0) {
            awardsContent += '<h3><b>Awards </b></h3>'
            + '<p>' + awards[index] + ' (' + projects[index] + ')</p>';
          }
      } else if (hackathonName[index] == hackathonName[index-1]) {
        projectsContent += '<p>' + projects[index] + ' ('
          + developers[index] + ')</p>';
          if (awards[index].length > 0) {
            awardsContent += '<p>' + awards[index] + ' (' + projects[index] + ')</p>';
          }
      }
      // htmlContent = htmlContent + projectsContent + awardsContent;
      // htmlContent += '<br><br>'
    }
htmlContent = htmlContent + projectsContent + awardsContent;
    // projectsContent = "";
    // awardsContent = "";
    htmlContent += '<br><br>'
    index++;
      htmlContent += '</ol></div>';
  }
  // htmlContent += '<br></br>';
  document.getElementById("htmlContentContainer").innerHTML = htmlContent;

}
