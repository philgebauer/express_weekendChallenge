var number = {
    x: '',
    y: '',
    buttonType: ''
}


$(document).ready(function() {
    console.log('I work!');

    function getNumber() {
      $.ajax({
        type: 'GET',
        url: '/add',
        success: function (data) {
          console.log("got data!");
          appendNumbers(data);
        }
      });
    }


function appendNumbers (num) {
  $('#numbersBox').append('<h2>' + num.result + '</h2>' )
}


$('button').on('click', postNumbers);



function postNumbers(numbers) {
  event.preventDefault();
  // var number = {};
  console.log("1:", numbers);

  number.buttonType = $(this).data('type');


  $.each($('#inputData').serializeArray(), function (i, field) {
    number[field.name] = field.value;
  });

  console.log("2", number);


  $.ajax({
    type: 'POST',
    url: '/add',
    data: number,
    success : function (data) {
      getNumber(data);
      console.log(number);
      }
    });
  }
});
