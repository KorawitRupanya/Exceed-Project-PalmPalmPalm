$(function () {
  let day = false
  let rain = false
  let red = false
  let bgColor = "#d1fdff"
  let palmNumber = 0
  let numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  $('#day-button').on('click', function () {
    console.log('press');
    day = !day
    if (day === true) {
      document.body.style.backgroundColor = "#330867";
      bgColor = "#330867";
    } else {
      document.body.style.backgroundColor = "#d1fdff";
      bgColor = "#d1fdff";
    }
  })
  $('#rain-button').on('click', function () {
    rain = !rain
    if (rain === true) {
      document.body.style.backgroundImage = "url(png/rain.png)";
      document.body.style.backgroundColor = bgColor;
    } else {
      document.body.style.backgroundImage = "";
    }
  })
  $('#red-button').on('click', function () {
    red = !red
    if (palmNumber === 10 & red === true) {
      $('#status').html('<div id="palm-status" class="alert alert-warning" role="alert"><h3>Status</h3><div style="text-align: center"><h1>half-ripe palm</h1></div></div >')
    }
    if (palmNumber >= 12 & red === true) {
      $('#status').html('<div id="palm-status" class="alert alert-danger" role="alert"><h3>Status</h3><div style="text-align: center"><h1>ripe palm</h1></div></div >')
    }
  })
  $('#raw').on('click', function () {
    $('#status').html('<div id="palm-status" class="alert alert-secondary" role="alert"><h3>Status</h3><div style="text-align: center"><h1>raw palm</h1></div></div >')
  })
  $('#half-ripe').on('click', function () {
    $('#status').html('<div id="palm-status" class="alert alert-warning" role="alert"><h3>Status</h3><div style="text-align: center"><h1>half-ripe palm</h1></div></div >')
  })
  $('#ripe').on('click', function () {
    $('#status').html('<div id="palm-status" class="alert alert-danger" role="alert"><h3>Status</h3><div style="text-align: center"><h1>ripe palm</h1></div></div >')
  })
  $('#add').on('click', function () {
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
      }
      if (palmNumber === 10 & red === true) {
        $('#status').html('<div id="palm-status" class="alert alert-warning" role="alert"><h3>Status</h3><div style="text-align: center"><h1>half-ripe palm</h1></div></div >')
      }
      if (palmNumber >= 12 & red === true) {
        $('#status').html('<div id="palm-status" class="alert alert-danger" role="alert"><h3>Status</h3><div style="text-align: center"><h1>ripe palm</h1></div></div >')
      }
    }
  })
  $('#clear').on('click', function () {
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
    $('#status').html('<div id="palm-status" class="alert alert-secondary" role="alert"><h3>Status</h3><div style="text-align: center"><h1>raw palm</h1></div></div >')
    $('#palm-number').html(`<h4>Number of ripe palm fruits: 0 palm fruit</h4>`)
    $('#add-palm').html('')
    palmNumber = 0;
    $('#red-button').prop('checked', false)
    red = false;
    numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

  })
})
