$(function () {
    let lightbutton = false;
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th/exceed/api/palmpalmpalm-light_to_ready/view",
            dataType: "text",
            success: function (response) {
                if(response==1||response==0){
                    console.log(response)
                if (response == 1) {
                    $("#lightbutton").prop('checked', true);
                    lightbutton=true;
                } else  if(response == 0) {
                    $('#lightbutton').prop('checked', false);
                    lightbutton=false;
                }
                }
            }, fail: {
                function(response) {
                    console.log(response)
                }
            }
        });
    $('#lightbutton').on('click', function () {
        lightbutton = !lightbutton
        if (lightbutton === true) {
            $.ajax({
                type: "POST",
                url: "http://ecourse.cpe.ku.ac.th/exceed/api/palmpalmpalm-light_to_ready/set",
                data: { value: 1 },
                dataType: "text",
                success: function (response) {
                    console.log('Great')
                }, fail: {
                    function(response) {
                        console.log(response)
                    }
                }
            });
        } else {
            $.ajax({
                type: "POST",
                url: "http://ecourse.cpe.ku.ac.th/exceed/api/palmpalmpalm-light_to_ready/set",
                data: { value: 0 },
                dataType: "text",
                success: function (response) {
                    console.log('Great')
                }, fail: {
                    function(response) {
                        console.log(response)
                    }
                }
            });
        }
    })
})