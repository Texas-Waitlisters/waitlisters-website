window.onload = (function(){

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
