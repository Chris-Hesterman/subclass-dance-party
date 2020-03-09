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
      1500
    );

    $('.dancefloor').append(dancer.$node);
    window.dancers.push(dancer.$node);

  });

  $('.lineup').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
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

  var detect = function(){
    var findDistance = function(dancer1, dancer2){
      var x1 = dancer1[0].x;
      var y1 = dancer1[0].y;

      var x2 = dancer2[0].x;
      var y2 = dancer2[0].y;

      var distance = Math.sqrt( ( ( Math.abs(x1 - x2)**2) )  + ( ( Math.abs(y1 - y2)**2) ));
      console.log(distance);
      return distance;
    }

    var dancer1 = window.dancers[0];
    var dancer2 = window.dancers[1];

    var distanceCheck = findDistance(dancer1, dancer2)

    if(distanceCheck !== 0 && distanceCheck < 200){
      $(dancer1[0]).remove();
      $(dancer2[0]).remove();
      window.dancers.splice(0, 2);
    }

  }



  setInterval(detect, 1500)
});
