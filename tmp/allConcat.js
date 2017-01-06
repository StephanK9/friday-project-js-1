$(document).ready(function(){
  $('#drsearch').submit(function(event){
    event.preventDefault();
    var symptom = $('#symptom').val();
    $('#drsearch').hide();
    $("#solution").prepend('<p>Your ' + symptom + ' has been recorded!</p>');
  });
})
