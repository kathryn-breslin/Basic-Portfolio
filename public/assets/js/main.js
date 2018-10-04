//click functionality 

$("#index-button").on("click", function (event) {
    window.location.href = "/";
});

$("#portfolio-button").on("click", function (event) {
    window.location.href = "/portfolio";
});

$("#contact-button").on("click", function (event) {
    window.location.href = "/contact";
});

$("#roadsterLink").on("click", function (event) {
    event.preventDefault();
    window.open("https://github.com/kathryn-breslin/Project2", "_blank") 
    console.log("Roadster has been clicked");
});

$("#friendLink").on("click", function (event) {
    event.preventDefault();
    window.open("https://github.com/kathryn-breslin/FriendFinder", "_blank") 
    console.log("Friend Finder has been clicked")

});

$("#burgerLink").on("click", function (event) {
    event.preventDefault();
    window.open("https://github.com/kathryn-breslin/burger", "_blank")
    console.log("Burger has been clicked")

});

$("#submitContact").on("click", function (event) {
    event.preventDefault();

    var firstName = $("#firstName").val().trim();
    var lastName = $("#lastName").val().trim();
    var email = $("#email").val();
    var phoneNumber = $("#phoneNumber").val();
    var comments = $("#details").val();

 if ((firstName === "") || (lastName === "") || (phoneNumber === "")) {
        swal({
            icon: "error",
            title: "Missing Info",
            text: "Please fill empty fields.",
            button: "Ok"
        });
    }
    else {
        var contactInfo = {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
            details: comments
        };
        console.log(contactInfo);

        $.ajax("/api/contact", {
            type: "POST",
            data: contactInfo
        }).then(function () {
            swal({
                icon: "success",
                title: "Contacted!",
                showConfirmButton: true,
                confirmButtonText: "Ok",
                closeOnConfirm: false
            }).then(function (result) {
                window.location = "/";
            })
        })
    }
})