canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_image="background.jpg";
rover_image="car1.png";
rover_width=120;
rover_height=70;
rover_x=10;
rover_y=10;

rover2_image="car2.png";
rover2_width=120;
rover2_height=70;
rover2_x=10;
rover2_y=10;

function add (){
background_img=new Image();
background_img.onload=uploadBackground;
background_img.src=background_image;
rover_img=new Image();
rover_img.onload=uploadRover;
rover_img.src=rover_image;

rover2_img=new Image();
rover2_img.onload=uploadRover2;
rover2_img.src=rover2_image;

}
function uploadBackground(){
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
}

function uploadRover2(){
    ctx.drawImage(rover2_img,rover2_x,rover2_y,rover2_width,rover2_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=="38"){
    console.log("up");
    up();
}
if(keyPressed=="40"){
    console.log("down");
    down();

}
if(keyPressed=="37"){
    console.log("left");
    Left();
}
if(keyPressed=="39"){
    console.log("right");
    right();
}

if(keyPressed=="87 "){
    console.log("up");
    up2();
}
if(keyPressed=="83"){
    console.log("down");
    down2();

}
if(keyPressed=="65"){
    console.log("left");
    Left2();
}
if(keyPressed=="68"){
    console.log("right");
    right2();
}

}


function up2(){
 if(rover2_y>=0){
     rover2_y=rover2_y-10;
     console.log ("when up arrow is pressed, x="+rover2_x+"| y="+rover2_y);
     uploadBackground();
     uploadRover2();
 }   
}

function down2(){
    if(rover2_y<=500){
        rover2_y=rover2_y+10;
        console.log ("when down arrow is pressed, x="+rover2_x+"| y="+rover2_y);
        uploadBackground();
        uploadRover2();
    }   
   }

   function left2(){
    if(rover2_x>=0){
        rover2_x=rover2_x-10;
        console.log ("when left arrow is pressed, x="+rover2_x+"| y="+rover2_y);
        uploadBackground();
        uploadRover2();
    }   
   }
   
   function right2(){
       if(rover2_x<=700){
           rover2_x=rover2_x+10;
           console.log ("when right arrow is pressed, x="+rover2_x+"| y="+rover2_y);
           uploadBackground();
           uploadRover2();
       }   
      }



      function up(){
        if(rover_y>=0){
            rover_y=rover_y-10;
            console.log ("when up arrow is pressed, x="+rover_x+"| y="+rover_y);
            uploadBackground();
            uploadRover();
        }   
       }
       
       function down(){
           if(rover_y<=500){
               rover_y=rover_y+10;
               console.log ("when down arrow is pressed, x="+rover_x+"| y="+rover_y);
               uploadBackground();
               uploadRover();
           }   
          }
       
          function left(){
           if(rover_x>=0){
               rover_x=rover_x-10;
               console.log ("when left arrow is pressed, x="+rover_x+"| y="+rover_y);
               uploadBackground();
               uploadRover();
           }   
          }
          
          function right(){
              if(rover_x<=700){
                  rover_x=rover_x+10;
                  console.log ("when right arrow is pressed, x="+rover_x+"| y="+rover_y);
                  uploadBackground();
                  uploadRover();
              }   
             }