var theta = 0;


function setup() {
  createCanvas(1200, 600);
}

function draw() {
  background(0);
  stroke(136,190,247,255);
   


 

    // mittelkreis!!
    for (var j = 0; j < TWO_PI; j += 0.2) {
      
      push();
      translate(600, 300); 
      rotate(-theta-j);
      noFill();
      rect(0, 0, 80, 80 );
      
      pop();

    }



        // routierende linie um kreis mitte
     for (var j = 0; j < TWO_PI; j += 0.3) {
      push();
      translate(600, 300); 
      rotate(theta*j);
      noFill();
      line(mouseX, mouseY, 100, 100 ); // mit den ersten beiden zahlen den mittelradius verändern
      pop();
    }



          // Kreise total innen
    for (var j = 0; j < TWO_PI; j += 0.1) {
      push();
      translate(600, 300); 
      rotate(-theta+j);
      fill(136,190,247,255);
      ellipse(63, 100, 3, 3 ); // mit den ersten beiden zahlen den mittelradius verändern
     
      pop();
    }

           // Kreise total innen
    for (var j = 0; j < TWO_PI; j += 0.1) {
      push();
      translate(600, 300); 
      rotate(theta+j);
      noFill(136,190,247,255);
      ellipse(75, 100, 4, 4); // mit den ersten beiden zahlen den mittelradius verändern
     
      pop();
    }

      // Kreise ganz innen
    for (var j = 0; j < TWO_PI; j += 0.1) {
      push();
      translate(600, 300); 
      rotate(-theta*j);
      noFill(136,190,247,255);
      ellipse(180, 100, 8, 8 ); // mit den ersten beiden zahlen den mittelradius verändern
     
      pop();
    }

     // Kreise ganz innen
    for (var j = 0; j < TWO_PI; j += 0.1) {
      push();
      translate(600, 300); 
      rotate(-theta+j);
      fill(136,190,247,255);
      ellipse(165, 100, 8, 8 ); // mit den ersten beiden zahlen den mittelradius verändern
     
      pop();
    }
   

    // Kreise aussen Kontur
    for (var j = 0; j < TWO_PI; j += 0.1) {
      push();
      translate(600, 300); 
      rotate(theta+j);
      noFill(136,190,247,255);
      ellipse(300, 100, 20, 20 ); // mit den ersten beiden zahlen den mittelradius verändern
     
      pop();
    }

     // Kreise aussen mittelpunkt
    for (var j = 0; j < TWO_PI; j += 0.1) {
      push();
      translate(600, 300); 
      rotate(theta+j);
      fill(136,190,247,255);
      ellipse(300, 100, 10, 10 ); // mit den ersten beiden zahlen den mittelradius verändern
     
      pop();
    }

 // Kreise aussen
    for (var j = 0; j < TWO_PI; j += 0.1) {
      push();
      translate(600, 300); 
      rotate(-theta*j);
      fill(136,190,247,255);      
      ellipse(280, 100, 10, 10 ); // mit den ersten beiden zahlen den mittelradius verändern
     
      pop();
    }

      // Kreise noch weiter aussen/ innen
    for (var j = 0; j < TWO_PI; j += 0.1) {
      push();
      translate(600, 300); 
      rotate(theta+j);
      fill(136,190,247,255);      
      ellipse(380, 100, 3, 3 ); // mit den ersten beiden zahlen den mittelradius verändern
     
      pop();
    }

 // Kreise weiter aussen
    for (var j = 0; j < TWO_PI; j += 0.1) {
      push();
      translate(600, 300); 
      rotate(-theta+j);
      noFill(136,190,247,255);      
      ellipse(400, 100, 10, 10 ); // mit den ersten beiden zahlen den mittelradius verändern
     
      pop();
    }

     // Kreise noch weiter aussen
    for (var j = 0; j < TWO_PI; j += 0.1) {
      push();
      translate(600, 300); 
      rotate(-theta+j);
      fill(136,190,247,255);      
      ellipse(415, 100, 5, 5 ); // mit den ersten beiden zahlen den mittelradius verändern
     
      pop();
    }

     // Kreise noch weiter aussen 2
    for (var j = 0; j < TWO_PI; j += 0.1) {
      push();
      translate(600, 300); 
      rotate(-theta+j);
      fill(136,190,247,255);      
      ellipse(430, 100, 3, 3 ); // mit den ersten beiden zahlen den mittelradius verändern
     
      pop();
    }
  // Objekte routieren um Mittelkreis
  translate(width/2, height/2);
  fill(136,190,247,255);
  ellipse(0, 0, 10, 10);




  //linien mitte einzeln
  push();
  rotate(theta+1);
  translate(300, 0); // 1.zahl ist der abstand zum mittelpunkt
  noFill(50, 200, 255);
  line(10, 10, 10, 10);



  pop();

 





  // linie ganz innen
  for (var i = 0; i < TWO_PI; i += 0.2) { 

    // Push, rotate and draw a line!
    // The transformation state is saved at the beginning of each cycle through the for loop and restored at the end. 
    // Try commenting out these lines to see the difference!
    push(); 
    rotate(theta + i);
    //line(30, 30, 0, 10);



    // Objekte Mittelring
    for (var j = 0; j < TWO_PI; j += 0.5) {
      push();
      translate(70, 150); // macht mittel kreis größer oder kleiner
      rotate(-theta-j);
      fill(136,190,247,255);
      ellipse(mouseX, mouseY, 5, 5);
      pop();
    }

    pop();
  }

  theta += 0.003; // Rotationsgeschwindigkeit
}

function mousePressed() {
  background(0);  
}
