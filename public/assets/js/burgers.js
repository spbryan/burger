/***********************************************
 * Project: Burger
 * Developer: Sean Bryan
 * Date: 2019-06-26
 ***********************************************/
$(function () {
    $(".eat-burger").on("click", function (event) {
        console.log("eatin da burger");
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
});