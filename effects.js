const c=document.createElement("canvas");
document.body.appendChild(c);
const x=c.getContext("2d");

c.style.position="fixed";
c.style.zIndex="-1";

function size(){
  c.width=innerWidth;
  c.height=innerHeight;
}
size();

let p=[];

for(let i=0;i<70;i++){
  p.push({x:Math.random()*c.width,y:Math.random()*c.height});
}

function draw(){
  x.clearRect(0,0,c.width,c.height);
  x.fillStyle="#00ffff";

  p.forEach(d=>{
    x.fillRect(d.x,d.y,2,2);
    d.y+=1;
    if(d.y>c.height)d.y=0;
  });

  requestAnimationFrame(draw);
}

draw();
