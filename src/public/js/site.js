$(document).ready(function(){
    var reqCounter= 1;

    function poll() 
    {
        $.ajax({
            url: "/data",
            type: "GET",
            success: function(data) {
                console.log(JSON.stringify(data));
                $("#requestid").html(reqCounter); 
                $("#environment").html(data.node); 
                $("#instance").html(data.instance); 
                $("#port").html(data.port); 
                reqCounter = reqCounter + 1
            },
            dataType: "json",
            complete: setTimeout(function() {poll()}, 1000),
            timeout: 1000
        });
    }
    poll();
});