$('#home').click(function (){
    $('#home-content').show();
    $('#about-content').hide();
    $('#details-content').hide();
});

$('#about').click(function (){
    $('#about-content').show();
    $('#home-content').hide();
    $('#details-content').hide();
});     

$('#details').click(function (){
    $('#details-content').show();
    $('#home-content').hide();
    $('#about-content').hide();
});