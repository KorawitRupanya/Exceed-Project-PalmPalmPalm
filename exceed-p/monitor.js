let R = 0;
let G = 0;
let B = 0;

$(function () {
    setInterval(function () {
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th/exceed/api/palmpalmpalm-soid/view",
            dataType: "text",
            success: function (response) {
                console.log(response)
                if (0 <= response & response <= 1023) {
                    $("#result-soid").html(`<div class="full center alert alert-warning" role="alert">
                                        <h1 class = "big">${response}</h1></div>`)
                }
            },
            fail: function (response) {
                console.log(response)
            }, timeout: 5000
        })

        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th/exceed/api/palmpalmpalm-R/view",
            dataType: "text",
            success: function (response) {
                if (0 <= response & response <= 255) {
                    console.log(response)
                    R = response;
                }
            },
            fail: function (response) {
                console.log(response)
            }, timeout: 5000
        })
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th/exceed/api/palmpalmpalm-G/view",
            dataType: "text",
            success: function (response) {
                if (0 <= response & response <= 255) {
                    console.log(response)
                    G = response
                }
            },
            fail: function (response) {
                console.log(response)
            }, timeout: 5000
        })
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th/exceed/api/palmpalmpalm-B/view",
            dataType: "text",
            success: function (response) {
                if (0 <= response & response <= 255) {
                    console.log(response)
                    B = response;
                }
            },
            fail: function (response) {
                console.log(response)
            }, timeout: 5000
        })
        console.log(R, G, B)
        $("#result-RGB").css({ backgroundColor: `rgb(${R},${G},${B})` })


        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th/exceed/api/palmpalmpalm-z_axis/view",
            dataType: "text",
            success: function (response) {
                if (0 <= response & response <= 1023) {
                    console.log(response)
                    $("#result-z_axis").html(`<div class="full center alert alert-warning" role="alert">
                                        <h1 class = "big">${response}</h1></div>`)
                }
            },
            fail: function (response) {
                console.log(response)
            }, timeout: 5000
        })

        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th/exceed/api/palmpalmpalm-heat/view",
            dataType: "text",
            success: function (response) {
                if (0 <= response & response <= 1023) {
                    console.log(response)
                    $("#result-heat").html(`<div class="full center alert alert-warning" role="alert">
                                            <h1 class = "big">${response}</h1></div>`)
                }
            },
            fail: function (response) {
                console.log(response)
            }, timeout: 5000
        })
    }, 2000)

})
