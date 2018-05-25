	// Use of this Script Requires the Tabletop.js Library. The Calling HTML File must include tabletop.js

// Address of the Google Sheets Database
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1LvQAFKPG1r3AiDkCoAvanTLAmB5IZciKzJNzEaiybIk/edit#gid=0';

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
	var htmlContent = '<div class="carouselbox active proj"><div class="buttonProj"><button class="prev"> ◀ <span class="offscreen">Previous</span></button><button class="next"><span class="offscreen">Next</span> ▶ </button></div><ol class="content">';
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


    if (index == 0) {
      htmlContent += '<li class="current"><span><img src="'
        + projLogo[index]
        + '" class="projects" alt="" /></span>'
        + '<p><b><a href="'
        + devpostURL[index]
        + '" target="_blank">'
        + projTitle[index]
        + '</a> made for <b><a href="'
        + hackathonURL[index]
        + '">'
        + madeFor[index]
        + '</a></h4></p><h4>Developed by: '
        + developers[index]
        + '</h4></p><h4>'
        + commentary[index]
        + '</h4></p><h4>';
          if (videoDemo[index] == "") {
      		htmlContent += commentary2[index]
      		+ '</h4></li><br>';
          // index++;
          } else if (videoDemo[index] != "") {
          htmlContent += commentary2[index]
          + '</h4></p><b><a href="'
          + videoDemo[index]
      		+ '" target="_blank">View a demo'
      		+ '</a></p></li><br>';
          // index++;
          }
          index++;
    } else if (index > 0) {
        htmlContent += '<li><span><img src="'
        + projLogo[index]
        + '" class="projects" alt="" /></span>'
        + '<p><b><a href="'
        + devpostURL[index]
        + '" target="_blank">'
        + projTitle[index]
        + '</a> made for <b><a href="'
        + hackathonURL[index]
        + '">'
        + madeFor[index]
        + '</a></h4></p><h4>Developed by: '
        + developers[index]
        + '</h4></p><h4>'
        + commentary[index]
        + '</h4></p><h4>';
          if (videoDemo[index] == "") {
      		htmlContent += commentary2[index]
      		+ '</h4></li><br>';
          // index++;
          } else if (videoDemo[index] != "") {
          htmlContent += commentary2[index]
          + '</h4></p><b><a href="'
          + videoDemo[index]
      		+ '" target="_blank">View a demo'
      		+ '</a></p></li><br>';
          // index++;
          }
          index++;
        }
      }
      // htmlContent += '</ol></div>';

  htmlContent += '</ol></div>';
	document.getElementById("htmlContentContainer").innerHTML = htmlContent;

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
