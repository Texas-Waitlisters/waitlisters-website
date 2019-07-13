	// Use of this Script Requires the Tabletop.js Library. The Calling HTML File must include tabletop.js

// Address of the Google Sheets Database
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1FrkMGTyXJ-MWYYN_jws3xffMbAojz77rBRE4i3RamUc/edit?usp=sharing';

function init() {
Tabletop.init( { key: public_spreadsheet_url,
                 callback: showInfo,
                 simpleSheet: true } );
}

window.addEventListener('DOMContentLoaded', init)	// Calls method init when Sheets has loaded

// Method that gets called when data has been pulled from Google Sheets
function showInfo(data) {
	var projLogo = [];
	var projTitle = [];
	var devpostURL = [];
	var madeFor = [];
  var developers = [];
	var hackathonURL = [];
	var commentary = [];
	var commentary2 = [];
	var videoDemo = [];
	var index = 0; // Line 2 is index 0
	var htmlContent = '';
	//Builds the Forms and Addresses arrays using the Google Sheets Data
	//  var[index] = data[index]<COL_NAME>
	while (data[index] != null) {
		projLogo[index] = data[index].Project_Logo;
		projTitle[index] = data[index].Project_Title;
		devpostURL[index] = data[index].Devpost_URL;
		madeFor[index] = data[index].made_for_Hackathon;
    developers[index] = data[index].Developers;
		hackathonURL[index] = data[index].Hackathon_URL;
		commentary[index] = data[index].Commentary;
		commentary2[index] = data[index].Commentary2;
    videoDemo[index] = data[index].Video_Demo;


      htmlContent += '<li><a href="'
        + devpostURL[index]
        + '" target="_blank" data-largesrc="'
        + projLogo[index]
        + '" data-title="'
        + projTitle[index]
        + '" data-description="'
        + commentary[index]
        + '"><img src="'
        + projLogo[index]
        + '" class="projects" alt="'
        + projTitle[index]
        + '"/>';
          index++;
      }
      // htmlContent += '</ol></div>';

  // htmlContent += '</ol></div>';
	document.getElementById("htmlContentContainer").innerHTML = htmlContent;



}
