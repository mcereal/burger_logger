$(() => {
  $(".devour").on("click", function (event) {
    const id = $(this).data("id");
    const newDevour = $(this).data("newdevour");

    const newDevouredBurger = {
      devoured: newDevour,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredBurger,
    }).then(function () {
      console.log("changed devoured to", newDevour);
      location.reload();
    });
  });

  $("#add-burger").on("submit", (event) => {
    event.preventDefault();
    const addBurger = {
      name: $("#burger").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: addBurger,
    }).then(() => {
      location.reload();
    });
  });
});
