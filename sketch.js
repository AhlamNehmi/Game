var input;
var button;
var words
var bulls
var cows
var rand;
var cw;//computer
var pw;//player
var i;
var cr
var br
var wr 
var y=100

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
 button=createButton("submit").position(150,500);
 input=createInput().position(100,100);
 words=createElement("h1").html("WORDS").position(500,50);
 bulls=createElement("h1").html("BULLS").position(800,50);
 cows=createElement("h1").html("COWS").position(1100,50);
 rand=Math.round(random(0,s.length-1))
 console.log(rand);
 cw=s[rand]
 console.log(cw);
 button.mousePressed(result)
}

function draw() {
  background(255,255,255);  
 
}

function result(){
  var bullresult=0;
var cowresult=0
  if(input.value().length!=4){alert("Please Enter Only Four Letter Words")}
  pw=input.value().toLowerCase()
  console.log(pw);
  //bullconditions
  if(cw.charAt(0)===pw.charAt(0)){
    bullresult+=1
  }
  if(cw.charAt(1)===pw.charAt(1)){
    bullresult+=1
  }
  if(cw.charAt(2)===pw.charAt(2)){
    bullresult+=1
  }
  if(cw.charAt(3)===pw.charAt(3)){
    bullresult+=1
  }
  //cowscondition
  if(cw.charAt(0)===pw.charAt(1)||cw.charAt(0)===pw.charAt(2)||cw.charAt(0)===pw.charAt(3)){
  cowresult+=1
  }
  if(cw.charAt(1)===pw.charAt(0)||cw.charAt(1)===pw.charAt(2)||cw.charAt(1)===pw.charAt(3)){
    cowresult+=1
    }
    if(cw.charAt(2)===pw.charAt(1)||cw.charAt(2)===pw.charAt(0)||cw.charAt(2)===pw.charAt(3)){
      cowresult+=1
      }
      if(cw.charAt(3)===pw.charAt(1)||cw.charAt(3)===pw.charAt(2)||cw.charAt(3)===pw.charAt(0)){
        cowresult+=1
        }
        if(input.value().length===4){
          for(i=0;i<s.length;i=i+1){
            if(s[i].includes(pw)){
              break
            }
          }
          if(i<s.length){
             wr=createElement("h2").html(pw).position(510,y);
             br=createElement("h2").html(bullresult).position(850,y)
             cr=createElement("h2").html(cowresult).position(1120,y)
             y=y+50
            }
            else{
              alert("Enter A Valid Word")
            }
        }

}
