	// Use of this Script Requires the Tabletop.js Library. The Calling HTML File must include tabletop.js

// Address of the Google Sheets Database
var public_spreadsheet_url1 = 'https://docs.google.com/spreadsheets/d/1AVQc5kK_sMgrtIs2LIHwZM_ljtXbprB415tZ-R0Kemk/edit?usp=sharing';

function init() {
Tabletop.init( { key: public_spreadsheet_url1,
                 callback: showInfo,
                 simpleSheet: true } );
}

window.addEventListener('DOMContentLoaded', init)	// Calls method init when Sheets has loaded

// Method that gets called when data has been pulled from Google Sheets
function showInfo(data) {
	var newsOutletName = [];
	var articleTitle = [];
	var releaseDate = [];
	var projFeat = [];
	var newsURL = [];
	var index = 0; // Line 2 is index 0 
	var newsContent = "";
	//Builds the Forms and Addresses arrays using the Google Sheets Data
	//  var[index] = data[index]<COL_NAME>
	while (data[index] != null) {
		newsOutletName[index] = data[index].News_Outlet_Name;
		articleTitle[index] = data[index].Article_Title;
		releaseDate[index] = data[index].Release_Date;
		projFeat[index] = data[index].Project_Feature;
		newsURL[index] = data[index].News_URL;


		// Writes HTML code based on Form responses
		// alert(webURL[index] == undefined);
		// link = "";
		// link = webURL[index];

		newsContent += '<a href="'
		+ newsURL[index]
		+ '"><h3><strong>'
		+ newsOutletName[index] + ': </strong>'
		+ articleTitle[index] + '</h3></a><p>Featuring '
		+ projFeat[index] + '<a href="'
		+ newsURL[index]
		+ '" class="icon fa-external-link alt"></a></p><br>';


		index++;

	}
	document.getElementById("newContentContainer").innerHTML = newsContent;
}