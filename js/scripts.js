$(document).ready(function() {

  //display the flavors using JS
  var flavors = ['chocolate', 'peppermint', 'pisatchio', 'vanilla', 'strawberry'];
  flavors.forEach(function(flavor) {
    $('ul#cream').append("<li>" + flavor + "</li>");
  });


  $("#submit").click(function(e) {
    e.preventDefault();
    var inputFlavors = ["ice-cream1", "ice-cream2", "ice-cream3", "ice-cream4"]

    var finalFlavors = [];

    finalFlavors = inputFlavors.map(function(inputFlavor) {
      var aFlavor = $("#" + inputFlavor).val();
      var upperInput = aFlavor.toUpperCase();
      console.log(upperInput);
      return upperInput;

    });

      finalFlavors.sort();
      console.log(finalFlavors);

    // inputFlavors.forEach(function(inputFlavor) {
    //   var flavor = $("#" + inputFlavor).val();
    //   var upperInput = flavor.toUpperCase();
    //   finalFlavors.push(upperInput);
    // });
    // finalFlavors.sort();
    // console.log(finalFlavors);


  });

});
