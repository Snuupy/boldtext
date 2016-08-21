var displayapp = angular.module('app', ['ngSanitize']);

displayapp.controller('AppCtrl', function AppCtrl($scope, $timeout) {

  var w = 2; //set word count here

  //bacon ipsum best ipsum
  $scope.text = "Bacon ipsum dolor amet kevin meatloaf ribeye, ham bresaola pork turkey tail. Spare ribs hamburger shank, kevin tenderloin filet mignon tail tri-tip porchetta ribeye. Pork chop meatloaf beef beef ribs bresaola ground round, brisket meatball leberkas frankfurter. Corned beef cupim pig sausage brisket picanha andouille ball tip pork belly. Meatloaf frankfurter chicken t-bone shankle leberkas bacon strip steak ribeye pancetta ham hock brisket prosciutto shank tongue.";

  //tokenize string
  var wordArray = $scope.text.split(" ");
  $scope.htmlstring = "";

  var timer = 0;
  var boldindex = 0;

  $timeout(function iteration() {
    if (timer % 2 === 0) {
      addBold(boldindex, wordArray);
    } else if (timer % 2 === 1) {
      removeBold(boldindex, wordArray);
      boldindex++;
    }

    $scope.htmlstring = returnHTML(wordArray);
    console.log($scope.htmlstring);

    if (timer < wordArray.length) {
      timer++;
    } else {
      return;
    }
    $timeout(iteration, 1000);

  });


  function addBold(index, wordArray) {
    wordArray.splice(index, 0, "<b>");
    wordArray.splice(index + w + 1, 0, "</b>");
    return wordArray;
  }

  function removeBold(index, wordArray) {
    wordArray.splice(index, 1); //deletes <b>
    wordArray.splice(index + w, 1); //deletes </b>
    return wordArray;
  }

  function returnHTML(array) {
    var html = "";
    for (var i = 0; i < array.length; i++) {
      html += array[i] + " ";
    }
    return html;
  }



});