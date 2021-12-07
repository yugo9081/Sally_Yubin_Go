let header = document.getElementById('banner');
let counter = 0;
let bantxt = ["> Sally Go","> Yubin Go","> Software Developer", "> Fullstack Develepor"];
let activeText = bantxt[0];
//where to start the text display onload "How we ".
let activeCounter = 2;
let typeCounter = 150;
let backCounter = 80;
//hold time on full string
let holdTime0 = 800;

//hold time after deleting
let holdTime1 = 100;
let forward = true;

typeIt();

//functions


//manage banner change array position
function bannerChanger(){
    setTimeout(()=> {


    typeIt();
      activeCounter = 6;
      bannerChanger();

    }, timeCount);
}

//manage banner type and erase
function typeIt(){
  if(forward == true){
    if(activeCounter == bantxt[counter].length){
      setTimeout(()=>{
         forward = false;
         typeIt();
       }, holdTime0);

    }else{
    setTimeout(()=>{
       activeCounter+=1;
        activeText = bantxt[counter].substring(0,activeCounter);
        header.innerHTML=activeText;
        typeIt();
      }, typeCounter);
    }

  }else{
    if(forward == false && activeCounter > 2){
      setTimeout(() =>{
         activeCounter-=1;
         activeText = bantxt[counter].substring(0,activeCounter);
         header.innerHTML=activeText;
         typeIt();
      }, backCounter);
    }
    if(activeCounter == 2){
    setTimeout(()=>{
    if(counter<bantxt.length-1){
            counter += 1;
  }else{
    counter =0;
  }
      activeCounter = 2;
      forward = true;
      typeIt();
  }, holdTime1)
}
}
}
