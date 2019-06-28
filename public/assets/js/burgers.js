/***********************************************
 * Project: Burger
 * Developer: Sean Bryan
 * Date: 2019-06-26
 ***********************************************/
$(function () {
    $(".eat-burger").on("click", function (event) {
        var id = $(this).data("id");

        var eatenBurger = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatenBurger
        }).then(
            function () {
                console.log("changed eaten status to", true);
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function (event) {
        console.log("poopin da burger");
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("Delete the burger entry");
                location.reload();
            }
        );
    });
});