// Constants
var size = 46;
var x = 15;
var y = 15;
// variables
var ball;
var m = x+size/2+size;
var n= y+size/2;
var a=x+size/2;
var b=n+size*5;
var color = Color.YELLOW;
var darkRed = new Color(139, 0, 0);
var element=0;
var element2=0;
var j;
var k;
var count=0;
var o;
var p;
var marks;
var colors=0;
var t=Randomizer.nextInt(0,1);
var whoStarts;
var count2=0;
var killedR =0;
var killedG =0;

function start(){
    background();
    board();
	balls();
    mouseClickMethod(step);
    whoStart();
    ukraine();
 
}
                //// LINES AROUND BOARD
function line(x,y,z,k) {
    var lin = new Line(x,y,z,k);
    lin.setColor(Color.BLUE);
    lin.setLineWidth(5);
    add(lin);
}                
                //// BACKGROUND
function background()  {
    var rect = new Rectangle(getWidth()+10, getHeight()+10);
    rect.setColor(Color.YELLOW);
    add(rect);
    line(15,15, 15, getHeight()-96);
    line(15,getHeight()-96, getWidth()-15, getHeight()-96);
    line(15,15, getWidth()-15, 15);
    line(getWidth()-15, 15, getWidth()-15, getHeight()-96);
}
                //// BOARD
function board ()  {
    while(y<=350) {
    rect(x, y, color);
    x = x + size;
    if(color==Color.BLUE) {
        color = Color.YELLOW;
    }else{
    color = Color.BLUE;
    }
    rect(x, y, color);
    if(color==Color.BLUE) {
        color = Color.YELLOW;
    }else{
    color = Color.BLUE;
    }
    x = x + size;
    
    if(x>=getWidth()-65)  {
        x = 15;
        y = y+size;
        if(color==Color.BLUE) {
        color = Color.YELLOW;
    }else{
    color = Color.BLUE;
    }
   
    }
}
}

function rect(x, y, color) {
    var rect;
    rect = new Rectangle(size,size);
    rect.setPosition(x, y);
    rect.setColor(color);
    add(rect);
}

function ballx(x, y) {
    ball = new Circle(20);
    ball.setColor(Color.RED);
    ball.setPosition(x, y);
    add(ball);
}

function bally(x, y) {
    var ball = new Circle(20);
    ball.setColor(Color.GREY);
    ball.setPosition(x, y);
    add(ball);
}
          /////   PIECES 
function balls() {
    for(var i=0; i<12; i++)  {
        ballx(m,n);
        m=m+2*size;
        if(m>=getWidth()) {
            n=n+size;
            m=x+size/2;
          if(n>=100) {
            m=x+size/2+size;
        }  
        }
    }
    for(var i=0; i<12; i++)  {
        bally(a,b);
        a=a+size*2;
        if(a>=getWidth()) {
            b=b+size;
            a=x+size/2+size;
          if(b>=350) {
            a=x+size/2;
        }  
        }
    }
}
                      ////// MOUSECLICKFUNCTION 
function step(e) { 
    
   
    if(count%6==5) {
    
  count=count-2;
}

 
    if(count%6==4) {
    if(getElementAt(e.getX(), e.getY())==element2 || getElementAt(e.getX(), e.getY())==marks) {
        element2 = 0;
        remove(marks);
        count++;
        
    }else{
        if(getElementAt(e.getX(), e.getY())!=element2 &&
        getElementAt(e.getX(), e.getY())!=marks && 
        ((p+size<getHeight()-size*2 && o-size>0 && getElementAt(o-size, p+size).getColor()==Color.BLUE) || 
        (p+size<getHeight()-size*2 && o+size<getWidth() && getElementAt(o+size, p+size).getColor()==Color.BLUE))) 
     
     {
                          //// RED MAKES STEPS    
       if(e.getX()<=o) {  if(e.getY()>=p && o-size>0 && getElementAt(o-size, p+size).getColor()==Color.BLUE) {
       element2.move(-size, size);
        if(element2.getY()>320) { element2.setColor(darkRed); } 
       remove(marks);
       count=count+2;
       count2++;
       }
       }else{   if(e.getY()>=p && o+size<getWidth() && getElementAt(o+size, p+size).getColor()==Color.BLUE) {
           element2.move(size, size);
            if(element2.getY()>320) { element2.setColor(darkRed); } 
           count=count+2;
           remove(marks);
           count2++;
       }
       }
           
       }
            ///////////////// RED KILLS GREY
     if(p+size*2<getHeight()-90 && o-size*2>0 && (getElementAt(o-size,p+size).getColor()==Color.GREY || getElementAt(o-size,p+size).getColor()==Color.CYAN)  &&
           (o-size*2>0 && getElementAt(o-size*2, p+size*2).getColor()==Color.BLUE))
     {   if(e.getX()<=o && e.getY()>=p) {
                element2.move(-size*2, size*2);
                 if(element2.getY()>320) { element2.setColor(darkRed); } 
                remove(marks);
                remove(getElementAt(o-size,p+size));
                killedG++;
                count=count+2;
                
            }
     }  
       
    if(p+size*2<getHeight()-90 && o+size<getWidth() && (getElementAt(o+size,p+size).getColor()==Color.GREY || getElementAt(o+size,p+size).getColor()==Color.CYAN) &&
            (o+size*2<getWidth() && getElementAt(o+size*2, p+size*2).getColor()==Color.BLUE))
     {   if(e.getX()>o && e.getY()>=p) {
                element2.move(+size*2, size*2);
                 if(element2.getY()>320) { element2.setColor(darkRed); } 
                remove(marks);
                remove(getElementAt(o+size,p+size));
                killedG++;
                count=count+2;
                
            }
     }   
       
        /////////////////RED CAN GO BACK///////////////////////////// 
     
     if(e.getX()<=o && colors==1) {  if(p-size>0 && e.getY()<=p && o-size>0 && getElementAt(o-size, p-size).getColor()==Color.BLUE) {
       element2.move(-size, -size);
       remove(marks);
       count=count+2;
       colors=0;
     }
       }else {   if(colors==1 && p-size>0 && e.getY()<=p && o+size<getWidth() && getElementAt(o+size, p-size).getColor()==Color.BLUE) {
           element2.move(size, -size);
           count=count+2;
           remove(marks);
           colors=0;
       }
     }
      
       //////////////////////RED CAN KILL BACK///////////////////
       
       if(colors==1 && o-size*2>0 && (getElementAt(o-size,p-size).getColor()==Color.GREY ||
       getElementAt(o-size,p-size).getColor()==Color.CYAN) &&
           (o-size*2>0 && p-size*2>0 && getElementAt(o-size*2, p-size*2).getColor()==Color.BLUE))
     {   if(e.getX()<=o && e.getY()<=p) {
                element2.move(-size*2, -size*2);
                remove(marks);
                remove(getElementAt(o-size,p-size));
                killedG++;
                count=count+2;
                colors=0; 
                
            }
     }  
       
        if(colors==1 && p-size*2>0 && o+size<getWidth() && (getElementAt(o+size,p-size).getColor()==Color.GREY ||
        getElementAt(o+size,p-size).getColor()==Color.CYAN) &&
            (o+size*2<getWidth() && getElementAt(o+size*2, p-size*2).getColor()==Color.BLUE))
     {   if(e.getX()>o && e.getY()<=p) {
                element2.move(+size*2, -size*2);
                remove(marks);
                remove(getElementAt(o+size,p-size));
                killedG++;
                count=count+2;
                colors=0; 
                
            }
     }
    
     }
}
   
    if(count%6==3) {
    if(getElementAt(e.getX(), e.getY()).getColor()==Color.RED) {
        element2 = getElementAt(e.getX(), e.getY());
        o = element2.getX();
        p = element2.getY();
        mark(o, p);
        count++;
        
    }
    
    /////////////////// RED BECOMES DARK RED
    if(getElementAt(e.getX(), e.getY()).getColor()==darkRed) {
        element2 = getElementAt(e.getX(), e.getY());
        o = element2.getX();
        p = element2.getY();
        mark(o, p);
        count++;
        colors=1;
        
    }
}
    
   if(count%6==2) {
    
  count=0;
}

   if(count%6==1) {
    
   
    if(getElementAt(e.getX(), e.getY())==element || 
    getElementAt(e.getX(), e.getY())==marks) {
        element = 0;
        remove(marks);
        count++;
        
    }else{
        
    
        if(getElementAt(e.getX(), e.getY())!=element &&
        getElementAt(e.getX(), e.getY())!=marks &&
        ((k-size>0 && j-size>0 && getElementAt(j-size, k-size).getColor()==Color.BLUE) || 
        (k-size>0 && j+size<getWidth() && getElementAt(j+size, k-size).getColor()==Color.BLUE))) 
     
     { 
            /////////GREY MAKES STEPS
          
       if(e.getX()<=j && e.getY()<=k && e.getX()>j-size*1.5 && e.getY()>k-size*1.5 ) { if(j-size>0 && getElementAt(j-size, k-size).getColor()==Color.BLUE) {
       element.move(-size, -size);
       if(element.getY()<40) { element.setColor(Color.CYAN); } 
       remove(marks);
       count=count+2;
       count2++;
       }}
       else {   if(e.getY()<=k && j+size<getWidth() && getElementAt(j+size, k-size).getColor()==Color.BLUE && e.getY()>k-size*1.5 && e.getX()<j+size*1.5  ) {
           element.move(size, -size);
           if(element.getY()<40) { element.setColor(Color.CYAN); } 
           count=count+2;
           remove(marks);
           count2++;
       }}
           
       }
                /////////////////////////////////  GREY KILLS RED
       if(k-size*2>0 && j-size>0 && (getElementAt(j-size,k-size).getColor()==Color.RED ||
       getElementAt(j-size,k-size).getColor()==darkRed) &&
           (j-size*2>0 && getElementAt(j-size*2, k-size*2).getColor()==Color.BLUE))
     {   if(e.getX()<=j && e.getY()<=k) {
                element.move(-size*2, -size*2);
                if(element.getY()<40) { element.setColor(Color.CYAN); } 
                remove(marks);
                remove(getElementAt(j-size,k-size));
                killedR++;
                count=count+2;
                
            }
     }
     
     if(k-size*2>0 && j+size<getWidth() && (getElementAt(j+size,k-size).getColor()==Color.RED ||
     getElementAt(j+size,k-size).getColor()==darkRed) &&
            (j+size*2<getWidth() && getElementAt(j+size*2, k-size*2).getColor()==Color.BLUE))
     {   if(e.getX()>j && e.getY()<=k) {
                element.move(+size*2, -size*2);
                if(element.getY()<40) { element.setColor(Color.CYAN); } 
                remove(marks);
                remove(getElementAt(j+size,k-size));
                killedR++;
                count=count+2;
                
            }
     }
     
        ////////////////////////////GREY CAN GO BACK ///////////////////////////// 
       
     if(e.getX()<=j && colors==1) {  if(k+size<getHeight()-size*2 && e.getY()>=k && j-size>0 && getElementAt(j-size, k+size).getColor()==Color.BLUE) {
       element.move(-size, size);
       remove(marks);
       count=count+2;
       colors=0;
       }
       }else{   if(colors==1 && k+size<getHeight()-size*2 && e.getY()>=k && j+size<getWidth() && getElementAt(j+size, k+size).getColor()==Color.BLUE) {
           element.move(size, size);
           count=count+2;
           remove(marks);
           colors=0;
       }
       }
       //////////////////////////////GREY CAN KILL BACK //////////////////////
       
       if(colors==1 && j-size*2>0 && (getElementAt(j-size,k+size).getColor()==Color.RED ||
       getElementAt(j-size,k+size).getColor()==darkRed) &&
           (j-size*2>0 && getElementAt(j-size*2, k+size*2).getColor()==Color.BLUE))
     {   if(e.getX()<=j && e.getY()>=k) {
                element.move(-size*2, size*2);
                remove(marks);
                remove(getElementAt(j-size,k+size));
                killedR++;
                count=count+2;
                colors=0; 
                
            }
     }  
       
       if(colors==1 && k+size*2<getHeight() && j+size<getWidth() && (getElementAt(j+size,k+size).getColor()==Color.RED ||
       getElementAt(j+size,k+size).getColor()==darkRed) &&
            (j+size*2<getWidth() && getElementAt(j+size*2, k+size*2).getColor()==Color.BLUE))
     {   if(e.getX()>j && e.getY()>=k) {
                element.move(+size*2, size*2);
                remove(marks);
                remove(getElementAt(j+size,k+size));
                killedR++;
                count=count+2;
                 colors=0; 
                
            }
     }
     
    }
}

    if(count%6==0) {
    
   
    if(getElementAt(e.getX(), e.getY()).getColor()==Color.GREY) {
        element = getElementAt(e.getX(), e.getY());
        j = element.getX();
        k = element.getY();
        mark(j, k);
        count++;
        
    }
        ///////////////////  When GREY BECOMES CAYEN
    if(getElementAt(e.getX(), e.getY()).getColor()==Color.CYAN) {
        element = getElementAt(e.getX(), e.getY());
        j = element.getX();
        k = element.getY();
        mark(j, k);
        count++;
        colors=1;
        
    }
}
  if(count2>=1) {
         remove(whoStarts);
   }
   whoWins();

}

function mark(x,y) {
     marks = new Circle(6);
    marks.setColor(Color.ORANGE);
    marks.setPosition(x,y);
    add(marks);
}

function whoStart() {
     if(t==0) {
    count=0;
    }else{
    count=3;
    }
    
    if(t==0) {
       whoStarts= new Text("GREY STARTS");
       whoStarts.setPosition(200, 430);
       whoStarts.setColor(Color.WHITE);
       add(whoStarts);
       
    }else{
        whoStarts= new Text("RED STARTS");
       whoStarts.setPosition(200, 430);
       whoStarts.setColor(Color.RED);
       add(whoStarts);
    }
}

function whoWins() {
    if(killedG>=12) {
         var txt= new Text("RED WINS!");
       txt.setPosition(140, 430);
       txt.setColor(Color.RED);
       add(txt);
    }
    if(killedR>=12) {
        var txt= new Text("GREY WINS!");
       txt.setPosition(140, 430);
       txt.setColor(Color.WHITE);
       add(txt);
    }
}

function ukraine() {
    var txt = new Text("#IStandWithUkraine  #PutinKhuilo", "15pt Arial");
    txt.setPosition(50, 460);
    txt.setColor(Color.BLUE);
    add(txt);
}
