// setInterval(function() {$.ajax({
//     type: "GET",
//     url: "",
//     dataType: "text",
//     success: function (response) {
//         console.log(response)
//         let cleaned = response
//              .replace(/&/g, '&amp')
//              .replace(/&/g, '&lt')
//              .replace(/&/g, '&quot')
             
//         $("#result").append(`<div class="full center alert alert-warning" role="alert">
//          <h1 class = "big">${response}</h1>
//        </div>`)
//     },
//     fail: function (response) {
//         console.log(response)
//     }
// });}, 2000)