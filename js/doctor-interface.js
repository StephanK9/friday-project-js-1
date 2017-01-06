var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $('#drsearch').click(function(event){
    var symptom = $('#search').val();
    $('#search').val("");
    $("#showDoctor").text('<p>Your ' + symptom + ' has been recorded!</p>');
  });
});
