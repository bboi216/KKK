let img_navBar;
let img_Banner;
let image_product;
let image_GNB;
let image_aiIcon;
let image_green;
let image_textBox;

let state = 0;
function preload(){
  image_navBar = loadImage('01_NavBar.png');
  image_Banner = loadImage('02_AdBanner.png');
  image_product = loadImage('03_Product.png');
  image_GNB = loadImage('04_GNB.png');
  image_aiIcon = loadImage('05_ai_icon.png');
  image_green = loadImage('06_green.png');

}

function mouseClicked(){
  if(mouseX >= 320 && mouseX <=380){
    if(mouseY >=688 && mouseY <= 748){
      if(state == 0){
        state =1;
      }else if(state == 1){
        state = 0;
      }
    }
  }
}
function setup() {
  createCanvas(383, 852);
}

function draw() {
  background(225);
  
  if(state==0){
    image(image_navBar, 0, 0, 393, 128);
    image(image_Banner, 0,128,393,284);
    image(image_product,0,412,393,440);
    image(image_GNB,0,765,393,88);
    image(image_aiIcon,320,688,60,60);
  }else if(state==1){
    image(image_navBar, 0, 0, 393, 128);
    image(image_Banner, 0,128,393,284);
    image(image_product,0,412,393,440);
    image(image_GNB,0,765,393,88);
    image(image_aiIcon,320,688,60,60);
    image(image_green,0,612,383,152);
  }
  
}