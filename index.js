const dispaly=document.getElementById("dispaly");

let timer=null;
let elapsedtime=0;
let starttime=0;
let isrunning=false;

 function start(){
    if(!isrunning){
    starttime = Date.now()-elapsedtime;
    timer=setInterval(updatetime,10);
    isrunning=true;

    }
    console.log(starttime);

}

function stop(){
    if(isrunning){
        clearInterval(timer);
        const currenttime=Date.now();
        elapsedtime=currenttime-starttime;
        isrunning=false;
    }

}

function reset(){
    clearInterval(timer);
     
      elapsedtime=0;
 starttime=0;
 isrunning=false;
 dispaly.textContent="00:00:00:00";


}
function updatetime(){
    const currenttime=new Date();
    elapsedtime=currenttime-starttime;
    let hours=Math.floor(elapsedtime/(60*1000*60)).toString().padStart(2,0);
    let minutes=Math.floor(elapsedtime/(1000*60)%60).toString().padStart(2,0);
    let seconds=Math.floor(elapsedtime/1000%60).toString().padStart(2,0);
    let miliseconds=Math.floor(elapsedtime/(1000%60)/10).toString().padStart(2,0);
    dispaly.textContent=`${hours}:${minutes}:${seconds}:${miliseconds}`;
}