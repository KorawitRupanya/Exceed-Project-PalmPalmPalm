let R = 0;
let G = 0;
let B = 0;
$(function () {
  let rain = false
  let red = false
  let click = false
  let bgColor = "#d1fdff"
  let palmNumber = 0
  let numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  $('#close-button').on('click', function () {
    click = false
    console.log('close-button: ' + click)
  })

  setInterval(function () {
    $.ajax({
      type: "GET",
      url: "http://ecourse.cpe.ku.ac.th/exceed/api/palmpalmpalm-light_to_ready/view",
      dataType: "text",
      success: function (response) {
        if (response == 1 || response == 0) {
          console.log(response)
          if (response == 1) {
            $("#lightbutton").prop('checked', true);
            lightbutton = true;
          } else if (response == 0) {
            $('#lightbutton').prop('checked', false);
            lightbutton = false;
          }
        }
      }, fail: {
        function(response) {
          console.log(response)
        }
      }
    });
    $.ajax({
      type: "GET",
      url: "http://ecourse.cpe.ku.ac.th/exceed/api/palmpalmpalm-soid/view",
      dataType: "text",
      success: function (response) {
        console.log(response)
        if (0 <= response & response <= 1023) {
          if (response < 800) {
            $('#rain-button').prop('checked', true)
            rain = true;
            document.body.style.backgroundImage = "url(png/rain.png)";
            document.body.style.backgroundColor = bgColor;
          }
          else {
            document.body.style.backgroundImage = "";
            $('#rain-button').prop('checked', false)
            rain = false;
          }
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
          R = response;
        }
      },
      fail: function (response) {
        console.log('R: ' + response)
      }, timeout: 5000
    })
    $.ajax({
      type: "GET",
      url: "http://ecourse.cpe.ku.ac.th/exceed/api/palmpalmpalm-G/view",
      dataType: "text",
      success: function (response) {
        if (0 <= response & response <= 255) {
          console.log('G: ' + response)
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
          console.log('B: ' + response)
          B = response;
        }
      },
      fail: function (response) {
        console.log(response)
      }, timeout: 5000
    })
    console.log(R, G, B)
    if (84 < R & R < 96 & 239 < G & G < 261 & 159 < B & B < 176) {
      $('#red-button').prop('checked', true)
      red = true;
    }
    if (palmNumber === 10 & red === true) {
      $('#status').html('<div id="palm-status" class="alert alert-warning" role="alert"><h3>Status</h3><div style="text-align: center"><h1>half-ripe palm</h1></div></div >')
    }
    if (palmNumber >= 12 & red === true) {
      $('#status').html('<div id="palm-status" class="alert alert-danger" role="alert"><h3>Status</h3><div style="text-align: center"><h1>ripe palm</h1></div></div >')
    }

    $.ajax({
      type: "GET",
      url: "http://ecourse.cpe.ku.ac.th/exceed/api/palmpalmpalm-z_axis/view",
      dataType: "text",
      success: function (response) {
        // if (prevoiusCount !== Response) {
        // if (firstResp === true) {
        //   prevoiusCount = response
        //   firstResp = false
        // }
        console.log('press:' + response)
        if (0 <= response & response <= 1023) {
          if ((response > 200 & response < 429) || (response > 300 & response > 447)) {
            let luckyNumber = numList[Math.floor(Math.random() * numList.length)];
            let index = numList.indexOf(luckyNumber);
            if (index > -1 & numList.length != 0) {
              numList.splice(index, 1)
              let xPos = 199 + (20 * (luckyNumber))
              if (luckyNumber === 14) {
                xPos = 473
              }
              if (palmNumber < 15) {
                palmNumber++;
                if (palmNumber === 1 || palmNumber === 0) {
                  $('#palm-number').html(`<h4>Number of ripe palm fruits: ${palmNumber} palm fruit</h4>`)
                  $('#add-palm').append(`<img id="palm-fruit" src="png/palm-fruit1.png" alt="palm-fruits" style="margin-left: ${xPos}px;">`)
                }
                else {
                  $('#palm-number').html(`<h4>Number of ripe palm fruits: ${palmNumber} palm fruits</h4>`)
                  $('#add-palm').append(`<img id="palm-fruit" src="png/palm-fruit1.png" alt="palm-fruits" style="margin-left: ${xPos}px;">`)
                }
                if (palmNumber === 10) {
                  $('#status').html('<div id="palm-status" class="alert alert-warning" role="alert"><h3>Status</h3><div style="text-align: center"><h1>half-ripe palm</h1></div></div >')
                }
                if (palmNumber >= 12) {
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
                  $('#status').html('<div id="palm-status" class="alert alert-danger" role="alert"><h3>Status</h3><div style="text-align: center"><h1>ripe palm</h1></div></div >')
                }
              }
            }
          }
        }
        // prevoiusCount = response
        // }
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
          console.log('squirrel: ' + response)
          if (response == 1 & click == false) {
            document.getElementById("squirrel").click();
            console.log('click')
            click = true
          }
          // if (response == 0) {
          //   click = false
          // }
        }
      },
      fail: function (response) {
        console.log(response)
      }, timeout: 5000
    })
  }, 2000)

})
