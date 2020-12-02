$(() => {
  $(".devour").on("click", function (event) {
    const id = $(this).data("id");
    const newDevour = $(this).data("newdevour");

    $.ajax(`/api/burgers/ ${id}`, {
      type: "PUT",
      data: { devoured: newDevour },
    }).then(() => {
      location.reload();
    });
  });

  $("#add-burger").on("submit", (event) => {
    event.preventDefault();

    $.ajax("/api/burgers", {
      type: "POST",
      data: { name: $("#burger").val().trim() },
    }).then(() => {
      location.reload();
    });
  });
});
