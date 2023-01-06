let serial;
let value=0;

function setup() {
  createCanvas(300, 300);
  button=createButton('click me')
  button.position(10,30);
  button.mousePressed(myClick);
  background(255);
  serial=new p5.SerialPort();
  serial.open('COM22');
}

function myClick() 
{
  serial.write(value++);
}