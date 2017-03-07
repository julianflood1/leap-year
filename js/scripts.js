var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
    return true;
  }
  else {
    return false;
  }
}

$(function(){
 $('form#leap-year').submit(function(event){
   event.preventDefault();
   var year = $('input#year').val();
   $('.year').text(year);
   var result = leapYear(year);

   if(!result) {
     $('.not').text("not");
   }
   else {
     $('.not').text('');
   }
   $('#result').show();
 });
});
