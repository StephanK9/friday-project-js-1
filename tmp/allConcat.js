var apiKey = "f9040cfe6c7c460a034f37bc3a4311e7";

$(document).ready(function(){
  $('#drsearch').click(function(event){
    var symptom = $('#search').val();
    $('#search').val("");
    $("#showDoctor").text('<p>Your ' + symptom + ' has been recorded!</p>');
  });
});
