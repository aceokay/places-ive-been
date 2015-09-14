$(document).ready(function() {
  $("#add-note").click(function() {
    $("#new-notes").append('<div class="new-note jumbotron">' +
                                 '<div class="form-group">' +
                                   '<label for="new-time-of-year">Time of Year</label>' +
                                   '<input type="text" class="form-control new-time-of-year">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-location-notes">Location Notes</label>' +
                                   '<input type="text" class="form-control new-location-notes">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-rating">Rating</label>' +
                                   '<input type="text" class="form-control new-rating">' +
                                 '</div>' +
                               '</div>');
  });

  $("form#new-places").submit(function(event) {
   event.preventDefault();

   var inputtedLocation = $("input#new-location").val();
   var inputtedLandmarks = $("input#new-landmarks").val();

   var newPlaces = { location: inputtedLocation, landmarks: inputtedLandmarks, notes: [] };

   $(".new-note").each(function() {
     var inputtedTimeOfYear = $(this).find("input.new-time-of-year").val();
     var inputtedLocationNotes = $(this).find("input.new-location-notes").val();
     var inputtedRating = $(this).find("input.new-rating").val();
     var newNote = { timeOfYear: inputtedTimeOfYear, locationNotes: inputtedLocationNotes, rating: inputtedRating };
     newPlaces.notes.push(newNote);
   });


   $("ul#places").append("<li><span class='places'>" + newPlaces.location + "</span></li>");

   $(".places").last().click(function() {
     $("#show-places").show();

     $("#show-places h2").text(newPlaces.location);
     $(".location").text(newPlaces.location);
     $(".landmarks").text(newPlaces.landmarks);

     $("ul#notes").text("");
     newPlaces.notes.forEach(function(note) {
       $("ul#notes").append("<li>" + note.timeOfYear + ", " + note.locationNotes + ", " + note.rating + "</li>");
     });
   });

   $("input#new-location").val("");
   $("input#new-landmarks").val("");
   $("input.new-time-of-year").val("");
   $("input.new-location-notes").val("");
   $("input.new-rating").val("");
 });
});
