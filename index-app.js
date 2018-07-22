$(function () {

    $('#butt-log').on("click", function () {
        let username = $("#exampleDropdownFormEmail1").val()
        let resuser = "palm"
        let respass = "123"
        let password = $("#exampleDropdownFormPassword1").val()
        if (resuser === username && respass === password) {
            console.log(window.location)
            window.location.href = 'home.html'
        }
        else
            alert("Incorrect Username or password!")
    }
    )
})
