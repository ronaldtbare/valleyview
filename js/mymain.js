$(document).ready(function () {

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });



    $('#send').click(function (event) {
        
        console.log('Clicked')

        var name = $("#email").val()
        var email = $("#email").val()
        var subject = $("#email").val()
        var message = $("#email").val()
        var status = $('#status').status.empty()

        if(!name.length<2 || !name ==="") {
            status.append('<div>Email is valid</div>')
        } else {
            event.preventDefault();
            status.append('<div>Email is not valid</div>')
        }
        if(email.length>5 && email.includes('@') && email.includes('.')) {
            status.append('<div>Email is valid</div>')
        } else {
            event.preventDefault();
            status.append('<div>Email is not valid</div>')
        }

        if(subject.length >= 2) {
            status.append('<div>Subject is valid</div>')
        } else {
            event.preventDefault();
            status.append('<div>Subject is not valid</div>')
        }

        if(message.length > 10) {
            status.append('<div>Message is valid</div>')
        } else {
            event.preventDefault();
            status.append('<div>Message is not valid</div>')
        }

    })
})