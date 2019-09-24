$( document ).ready(function() {
    console.log( "ready!" );
    $("#submitButton").on('click', submitClick);
    $("#apiTest").on('click', hitTestEndpoint);
    jQuery.support.cors = true;
});

function submitClick(){
    console.log("Button clicked");
    $("#nice").text("Nice");
}

function hitTestEndpoint(){
    console.log('Hit test endpoint button');
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8092/test',
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        success: function(data){
            console.log('Received something');
            $("#nice").text(data);
        },
        error: function(data){
            console.log(data)
        }
    });
}