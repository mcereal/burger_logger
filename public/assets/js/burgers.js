$(() => {
  $(".devour").on("click", (event) => {
    const id = $(this).data("id");
    const eatBurger = $(this).data("newdevour");

    const devouredBurger = {
      devoured: eatBurger,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredBurger,
    }).then(function () {
      console.log("changed devoured to", eatBurger);
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
