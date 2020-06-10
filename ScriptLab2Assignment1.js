let videoArray=["Video/fun.MP4","Video/mm.MP4","Video/cockacola.MP4","Video/ww.MP4",
                "Video/mm.MP4","Video/fun.MP4","Video/cockacola.MP4","Video/ww.MP4",
                "Video/mm.MP4","Video/fun.MP4"];
window.addEventListener("load",function(){
     
     let videoObj=this.document.querySelector("video"); //video object
    //starting the video with volume zero
        videoObj.volume=0;
        videoObj.play();
       
    
     videoObj.onclick=function(){      //onclick event
        this.volume=1;
         if(this.paused){
            this.play();
         }else{
             this.pause();
         }
     }
     videoObj.ondblclick=function(event){
        /* videoObj.parentElement.requestFullscreen();    //for fullscreen and disable the controls
         videoObj.style.width=`${screen.width}px`;
         videoObj.style.height=`${screen.height}px`;*/
        this.requestFullscreen();
        
    }
     let spanObjs=this.document.querySelectorAll("span");
     let bluespan;
     for(let i=0;i<spanObjs.length;i++){
         spanObjs[i].onclick=function(){
                  videoObj.src=videoArray[i];
                  videoObj.play();
                  bluespan=document.querySelector(".blueSpan");
                  if(bluespan){
                   bluespan.style.backgroundColor="";
                   bluespan.className="";
                  }
                  this.className="blueSpan"; 
                  this.style.backgroundColor="blue";
                  this.volume=1;
         }
     }
    




});//load end