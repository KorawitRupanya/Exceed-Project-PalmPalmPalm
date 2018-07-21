$(function () {
    let image = "ผล.png"
    $("#buttomsmall").on("click", function () {
        image = 'ผล.jpg'
    })


    $("#buttommid").on("click", function () {
        image = 'a.png'
    })


    $("#buttomlarge").on("click", function () {
        image = 'b.png'
    })

    $("#savepic").on("click", function () {
        let name = $("#namepic").val();
        let descip = $("#descip").val();
        $("#box").append(`
            <div class="card" style="width: 16rem; margin-top:30px; margin-left: auto; margin-right: auto;">
            <img class="card-img-top" src="${image}" alt="">
            <div class="card-body">
                <p class="card-text">
                    <b>Name:</b> ${name}<hr>
                    <b>Description:</b> ${descip}
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


