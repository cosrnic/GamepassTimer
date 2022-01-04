//credit: https://www.reddit.com/r/jquery/comments/6pn455/looking_for_a_simple_jquery_daily_countdown_timer/
var myreset = [17,00,00]; // at what time to reset - 19:40:00

// Added myCountDownDiv variable to prevent jquery from walking the DOM o every update
var myCountDownDiv = document.getElementById('mycountdown');

var mycountdown = startCountdown();

function startCountdown(){
	var enddate = calculateEndDate();
  return setInterval(function(){tickTock(calculateStartDate(),enddate)}, 1000);
}
function calculateStartDate(){ //this needs to be edited if using the server time
	return new Date();
}
function calculateEndDate(){
    var enddate = new Date();
    enddate.setHours(myreset[0]);
    enddate.setMinutes(myreset[1]);
    enddate.setSeconds(myreset[2]);
    return enddate;
}
function tickTock(startdate, enddate){
  var diff = enddate.getTime() - startdate.getTime(); 
  d = diff >= 0 ? diff : diff + 24*3600*1000;
  var h = Math.floor(d / 3600 / 1000);
  var m = Math.floor(d / 60 / 1000) - 60*h; 
  var s = Math.floor(d / 1000) - 3600*h - 60*m; 
  printCountdown(h,m,s);
}
function pluralize(word,count){
  	return (count > 1) ? word+'s ' : word+' ';
}
function printCountdown(h,m,s){

  // Updated string concatination.  'and' was deisplayed after the seconds value
  var t = h +'H'+':' + m+'M'+ ':' +  s + 'S';
  
  myCountDownDiv.innerText = t;
  
  // Removed jquery
  //$('#mycountdown').html(t); 
}
