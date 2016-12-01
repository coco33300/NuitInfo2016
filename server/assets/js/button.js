function beforeSendHandler(){

}
function completeHandler(){

}
function errorHandler(){

}


$('#sendButton').click(function(){
    var pictureId = parseInt($('#pictureId').val());

    var formData = new FormData($('form')[0]);
    $.ajax({
        url: 'http://app.crowdpick.xyz:1337/personnes/upload/' + pictureId,  //Server script to process data
        type: 'POST',
        //crossDomain: true,
        //Ajax events
        beforeSend: beforeSendHandler,
        success: completeHandler,
        error: errorHandler,
        // Form data
        data: formData,
        //Options to tell jQuery not to process data or worry about content-type.
        cache: false,
        contentType: false,
        processData: false
    });
});
