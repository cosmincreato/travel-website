var tripsCount = document.querySelectorAll("span")[1];

function restore(){
  var lst = localStorage.getItem("trips")
  if(lst === null || lst === undefined){
    return; 
  }
  
  tripsCount.innerHTML = lst;
  
  return;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

restore()
localStorage.setItem("trips", parseInt(tripsCount.innerHTML) + 1);

document.getElementById('tripsMain').addEventListener('click', (e) => {
  let img = document.createElement("img");
  img.src = "../images/plane.png";
  img.style.position = "absolute";
  img.style.scale = 0.05;
  img.style.left = `${e.clientX - 500}px`;
  img.style.top = `${e.clientY - 700}px`;
  document.body.append(img);
  setTimeout(() => {
    img.remove();
  }, 5000);
});

for (let el of document.querySelectorAll(".innerButton")) {
  el.addEventListener('click', (e) => {
    setInterval(() => {
      el.style.backgroundColor = getRandomColor();
    }, 1000);
    e.stopPropagation();
  })
}
