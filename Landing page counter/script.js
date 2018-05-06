$(document).ready(function () {

    function clock() {
        var today = new Date();
        var H = today.getHours();
        var M = today.getMinutes();
        var S = today.getSeconds();
        var ms = today.getMilliseconds();
        $('#hours').html(H);
        $('#minutes').html(M);
        $('#seconds').html(S);
        $('#miliseconds').html(ms);
    }

    var myclock = setInterval(clock, 100);

});