const c=document.createElement("canvas");
document.body.appendChild(c);
const ctx=c.getContext("2d");

c.style.position="fixed";
c.style.zIndex="-1";
c.width=window.innerWidth;
c.height=window.innerHeight;

let p=[];

for(let i=0;i<60;i++){
  p.push({x:Math.random()*c.width,y:Math.random()*c.height});
}

function draw(){
  ctx.clearRect(0,0,c.width,c.height);
  ctx.fillStyle="#00ff88";

  p.forEach(d=>{
    ctx.fillRect(d.x,d.y,2,2);
    d.y+=1;
    if(d.y>c.height)d.y=0;
  });

  requestAnimationFrame(draw);
}

draw();
