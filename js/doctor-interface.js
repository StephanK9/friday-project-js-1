var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function(){
  
  $('#drsearch').click(function(event){
    var symptom = $('#search').val();
    $('#search').val("");
    $("#showDoctor").text('<p>Your ' + symptom + ' has been recorded!</p>');
  });
});
