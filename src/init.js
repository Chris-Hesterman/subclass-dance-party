$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('.dancefloor').height() * Math.random(),
      $('.dancefloor').width() * Math.random(),
      Math.random() * 1000
    );

    $('.dancefloor').append(dancer.$node);
    window.dancers.push(dancer.$node);
    console.log(window.dancers);
  });

  $('.lineup').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      console.log(window.dancers[i][0]);
      window.dancers[i][0].classList.add('jackLineUp');
      setTimeout(() => {
        window.dancers.forEach((dancer) => {
          dancer[0].style.left = 0;
        });
      }, 2000);
    }
  });

  $('.danceoff').on('click', function() {
    //generate 2 random integers within dancers length
    //edit each dancer's location to move into the middle
    //make them perform custom move
    //reset each dancer's location to previous location after setTimeout
    let dancer1 = Math.floor(Math.random() * window.dancers.length);
    let dancer2 = Math.floor(Math.random() * window.dancers.length);

    while (dancer1 === dancer2) {
      dancer1 = Math.floor(Math.random() * window.dancers.length);
    }
    // window.dancers[dancer1][0].style.left = '35vw';
    // window.dancers[dancer1][0].style.top = '30vw';
    // window.dancers[dancer2][0].style.left = '45vw';
    // window.dancers[dancer2][0].style.top = '30vw';
    // window.dancers[dancer1][0].style.left = 0;
    // window.dancers[dancer2][0].style.left = 0;
    // window.dancers[dancer1][0].classList.forEach(function(dClass) {
    //   // console.log(dClass === 'dancerOne');
    //   // console.log(dClass === 'dancerTwo');
    //   if (dClass === 'dancerOne' || dClass === 'dancerTwo') {
    //     window.dancers[dancer1][0].classList.remove('dancerOne');
    //     window.dancers[dancer1][0].classList.remove('dancerTwo');
    //   }
    // });

    // window.dancers[dancer2][0].classList.forEach(function(dClass) {
    //   if (dClass === 'dancerOne' || dClass === 'dancerTwo') {
    //     window.dancers[dancer2][0].classList.remove('dancerOne');
    //     window.dancers[dancer2][0].classList.remove('dancerTwo');
    //   }
    // });

    window.dancers[dancer1][0].classList.add('dancerOne');
    window.dancers[dancer2][0].classList.add('dancerTwo');
    // window.dancers[dancer1][0].classList.remove('jackLineUp');
    // window.dancers[dancer2][0].classList.remove('jackLineUp');

    setTimeout(function() {
      // window.dancers[dancer1][0].style.left = oldDancer1Left;
      // window.dancers[dancer1][0].style.top = oldDancer1Top;
      // window.dancers[dancer2][0].style.left = oldDancer2Left;
      // window.dancers[dancer2][0].style.top = oldDancer2Top;
      window.dancers[dancer1][0].classList.remove('dancerOne');
      window.dancers[dancer2][0].classList.remove('dancerTwo');
      // window.dancers[dancer1][0].classList.add('jackLineUp');
      // window.dancers[dancer2][0].classList.add('jackLineUp');
    }, 5000);
  });
});
