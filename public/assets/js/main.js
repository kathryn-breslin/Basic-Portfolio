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

$("#plantLink").on("click", function (event) {
    event.preventDefault();
    window.open("https://github.com/kathryn-breslin/clickyReact/tree/master/clickyreact", "_blank")
    console.log("Plant has been clicked")
});

$("#plantHeroku").on("click", function (event) {
    event.preventDefault();
    window.open("https://plant-picker-kathryn.herokuapp.com/", "_blank");
    console.log("Taking you to the deployed app");
});

$("#roadsterLink").on("click", function (event) {
    event.preventDefault();
    window.open("https://github.com/kathryn-breslin/Project2", "_blank") 
    console.log("Roadster has been clicked");
});

$("#roadsterVideo").on("click", function (event) {
    event.preventDefault();
    window.open("https://docs.google.com/presentation/d/1MXKVO7vOIaTJUfmee9KVCLYOzTzR5MyycZdVyAumS_o/edit?usp=sharing", "_blank") 
    console.log("Taking you to the demo");
});

$("#friendLink").on("click", function (event) {
    event.preventDefault();
    window.open("https://github.com/kathryn-breslin/FriendFinder", "_blank") 
    console.log("Friend Finder has been clicked")
});

$("#friendHeroku").on("click", function (event) {
    event.preventDefault();
    window.open("https://friend-finder-kathryn.herokuapp.com/", "_blank") 
    console.log("Taking you to the deployed app");
});

$("#burgerLink").on("click", function (event) {
    event.preventDefault();
    window.open("https://github.com/kathryn-breslin/burger", "_blank")
    console.log("Burger has been clicked")
});

$("#burgerHeroku").on("click", function (event) {
    event.preventDefault();
    window.open("https://mysql-burger-kathryn.herokuapp.com/", "_blank")
    console.log("Taking you to the deployed app");
});

$("#scrapeLink").on("click", function (event) {
    event.preventDefault();
    window.open("https://github.com/kathryn-breslin/webScrape", "_blank")
    console.log("WSJ has been clicked")
});

$("#scrapeHeroku").on("click", function (event) {
    event.preventDefault();
    window.open("https://webscrape-kathryn.herokuapp.com/", "_blank")
    console.log("Taking you to the deployed app");
});

$("#bamazonLink").on("click", function (event) {
    event.preventDefault();
    window.open("https://github.com/kathryn-breslin/bamazon", "_blank")
    console.log("Taking you to the deployed app");
});

$("#bamazonVideo").on("click", function (event) {
    event.preventDefault();
    window.open("https://drive.google.com/file/d/1h5yKKOIxnc7hpXxlgFaoo2_M7x3K-fc9/view", "_blank")
    console.log("Taking you to the deployed app");
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