$(function () {
    let image = "png/big-palm-icon.png"
    let id = "big-palm-icon"
    $("#big-palm-button").on("click", function () {
        image = 'png/big-palm-icon.png'
        id = "big-palm-icon"
    })


    $("#small-palm-button").on("click", function () {
        image = 'png/palm2.png'
        id = "small-palm-icon"
    })

    $("#savepic").on("click", function () {
        let name = $("#namepic").val();
        let descript = $("#descript").val();
        $("#box").append(`
            <div class="card" style="width: 16rem; margin-top:30px; margin-left: auto; margin-right: auto;">
            <img id="${id}" class="card-img-top" src="${image}" alt="">
            <div class="card-body">
                <p class="card-text">
                    <b>Name:</b> ${name}<hr>
                    <b>Description:</b> ${descript}
                </p>
                <a href="profile.html"><button>Profile</button></a>
            </div>
            </div> 
        `)
        name = $("#namepic").val("");
        descip = $("#descip").val("");

    })
})













/* <h2>hello</h2>
<h3>${name}</h3>
<h3> descip</h3> */


