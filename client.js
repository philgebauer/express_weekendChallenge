var number = {
    x: '',
    y: '',
    buttonType: null
}



$(document).ready(function() {
    console.log('I work!');

    function getNumber() {
        $.ajax({
            type: 'GET',
            url: number.buttonType,
            success: function(data) {
                console.log("got data!");
                appendNumbers(data);
            }
        });
    }


    function appendNumbers(num) {
        $('#numbersBox').text(num.result);
    }


    $('.buttonsGroup').on('click', '#clear', clearAll);

    $('button').on('click', postNumbers);


    function clearAll () {
      number.x = '',
      number.y = '',
      number.buttonType = null,
      appendNumbers(number),
      $('#numbersBox').html('');
      $('#inputData').find('input[type=text]').val('');
    }


    function postNumbers(numbers) {
        event.preventDefault();
        console.log("1:", number);
        // $('#inputData').empty();

        number.buttonType = $(this).data('type');


        $.each($('#inputData').serializeArray(), function(i, field) {
            number[field.name] = field.value;
        });

        console.log("2:", number);

        $.ajax({
            type: 'POST',
            url: number.buttonType,
            data: number,
            success: function(data) {
                getNumber(data);
                console.log(number);
            }
        });
    }
});
