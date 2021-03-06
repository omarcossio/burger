console.log("YOU MADE IT, into the burger.js");

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
      console.log("EAT IT button was click");
      var id = $(this).data("id");
      if($(this).data("newdevoured") ===false){
        newDevoured = true;
      }else{
        newDevoured = false;
      }
      
  
      var newDevouredStatus = {
        devoured: newDevoured
      };

      console.log(newDevouredStatus);
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredStatus
      }).then(
        function() {
          console.log("changed devoured to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      
      //devoured is set to the integer value represeting false (0)
      //because a burger cannot be devoured upon adding
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: 0,
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  