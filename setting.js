$(function(){
let alert=false
let light=false
$('#click-alert').on('click', function () {
    alert = !alert
    if (alert === true) {
        console.log('Yes')
    //   $.ajax({
    //     type: "POST",
    //     url: "http://ecourse.cpe.ku.ac.th:1515/api/palmpalmpalm-web_button_pressed/set",
    //     data: { value: 0 },
    //     dataType: "text",
    //     success: function (response) {
    //       console.log('Great')
    //     }, fail: {
    //       function(response) {
    //         console.log('asdsajdhasnjdhsajd')
    //         console.log(response)
    //       }
    //     }
    //   });
    } else {
        console.log('No')
    //   $.ajax({
    //     type: "POST",
    //     url: "http://ecourse.cpe.ku.ac.th:1515/api/palmpalmpalm-web_button_pressed/set",
    //     data: { value: 1 },
    //     dataType: "text",
    //     success: function (response) {
    //       console.log('Great')
    //     }, fail: {
    //       function(response) {
    //         console.log('asdsajdhasnjdhsajd')
    //         console.log(response)
    //       }
    //     }
    //   });
    }
  })


  $('#click-light').on('click', function () {
    light = !light
    if (light === true) {
        console.log('On')
    //   $.ajax({
    //     type: "POST",
    //     url: "http://ecourse.cpe.ku.ac.th:1515/api/palmpalmpalm-web_button_pressed/set",
    //     data: { value: 0 },
    //     dataType: "text",
    //     success: function (response) {
    //       console.log('Great')
    //     }, fail: {
    //       function(response) {
    //         console.log('asdsajdhasnjdhsajd')
    //         console.log(response)
    //       }
    //     }
    //   });
    } else {
        console.log('Off')
    //   $.ajax({
    //     type: "POST",
    //     url: "http://ecourse.cpe.ku.ac.th:1515/api/palmpalmpalm-web_button_pressed/set",
    //     data: { value: 1 },
    //     dataType: "text",
    //     success: function (response) {
    //       console.log('Great')
    //     }, fail: {
    //       function(response) {
    //         console.log('asdsajdhasnjdhsajd')
    //         console.log(response)
    //       }
    //     }
    //   });
    }
  })
})