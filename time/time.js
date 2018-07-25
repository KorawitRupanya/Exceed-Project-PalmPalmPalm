var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
$(function () {
   
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th/exceed/api/odinpalm-smart/view",
            dataType: "text",
            success: function (response) {
                response=time;
                $('#h1').append(time)
            },
            fail: function (response) {
                console.log(response)
            }
        });
    
    $.ajax({
        type: "POST",
        url: "http://ecourse.cpe.ku.ac.th/exceed/api/odinpalm-smart/set",
        data: {
            value : time
        },
        dataType: "text",
        success: function (response) {
            response=time;
        },
        fail: function (response) {
            console.log(response)
        }
    });
})