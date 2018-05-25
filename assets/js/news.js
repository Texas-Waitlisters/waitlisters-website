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
	// var newsContent = '';
  var newsContent = '<div class="carouselbox active"><div class="buttons"><button class="prev"> ◀ <span class="offscreen">Previous</span></button><button class="next"><span class="offscreen">Next</span> ▶ </button></div><ol class="content">';
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

    if (index == 0) {
      newsContent += '<li class="current"><a href="'
      + newsURL[index]
  		+ '"><h3><strong>'
  		+ newsOutletName[index] + ': </strong>'
  		+ articleTitle[index] + '</h3></a><p>Featuring '
  		+ projFeat[index] + ' <a href="'
  		+ newsURL[index]
  		+ '" class="icon fa-external-link" style="vertical-align: middle;"></a></p></li>';

      index++;
    }
    else if (index > 0) {
      newsContent += '<li><a href="'
		+ newsURL[index]
		+ '"><h3><strong>'
		+ newsOutletName[index] + ': </strong>'
		+ articleTitle[index] + '</h3></a><p>Featuring '
		+ projFeat[index] + ' <a href="'
		+ newsURL[index]
		+ '" class="icon fa-external-link" style="vertical-align: middle;"></a></p></li>';
    index++
    }

	}
  newsContent += '</ol></div>';
	document.getElementById("newContentContainer").innerHTML = newsContent;

  carousel = (function(){

    if (!document.querySelector || !('classList' in document.body)) {
      return false;
    }

    // Read necessary elements from the DOM once
    var box = document.querySelector('.carouselbox');
    var next = box.querySelector('.next');
    var prev = box.querySelector('.prev');

    // Define the global counter, the items and the
    // current item
    var counter = 0;
    var items = box.querySelectorAll('.content li');
    var amount = items.length;
    var current = items[0];
    for (var i = 0; i < amount; ++i) {
      if (items[i].classList.contains('current')) {
        current = items[i];
        counter = i;
        break;
      }
    }

    // hide all elements and apply the carousel styling
    box.classList.add('active');

    // navigate through the carousel

    function navigate(direction) {

      // hide the old current list item
      current.classList.remove('current');

      // calculate the new position
      counter = counter + direction;

      // if the previous one was chosen
      // and the counter is less than 0
      // make the counter the last element,
      // thus looping the carousel
      if (direction === -1 && counter < 0) {
        counter = amount - 1;
      }

      // if the next button was clicked and there
      // is no items element, set the counter
      // to 0
      if (direction === 1 && !items[counter]) {
        counter = 0;
      }

      // set new current element
      // and add CSS class
      current = items[counter];
      current.classList.add('current');
    }

    // add event handlers to buttons
    next.addEventListener('click', function(ev) {
      navigate(1);
    });
    prev.addEventListener('click', function(ev) {
      navigate(-1);
    });

    // show the first element
    // (when direction is 0 counter doesn't change)
    navigate(0);

  })();


}
