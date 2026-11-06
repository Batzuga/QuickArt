
const timerText = document.getElementById("timer");
const drawText = document.getElementById("nowdraw");
const oldText = document.getElementById("previoustasks");

var seconds = 10;
var minutes = 5;

Timer();

function Start()
{
    
}

function Pause()
{

}

function Stop()
{

}

function Next()
{

}

function Timer()
{
    setTimeout(Timer, 1000);
    seconds--;
    if(seconds < 0)
    {
        minutes--;
        if(minutes < 0)
        {
            Next();
        }
        seconds = 59;
    }
    console.log("Tick");
    timerText.innerHTML =  minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

function PlayAudio()
{

}