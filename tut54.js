console.log("We are in tut 54");

let Btn=document.getElementById('Btn');
var audio = new Audio('1.mpeg');
function ringBell() {
    audio.play();
}
Btn.addEventListener('click',(e)=>{
  
    e.preventDefault();
    console.log("Setting the alarm ");
    let alarm=document.getElementById('alarm');
    let now=new Date();
    let alarmDate=new Date(alarm.value);
  
    let remTime=alarmDate-now;

    if(remTime>=0){
        setTimeout(() => {
            console.log("Ringing the alarm");
            ringBell();
        }, remTime);
}
})