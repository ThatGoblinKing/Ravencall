document.getElementById("testButton").addEventListener('click', async () => {
    console.log("TEST");
    const node = document.createTextNode("My name is Inigo Montoya. You killed my father. Prepare to die.")

    document.getElementById("mainBody").appendChild(node);
})


document.getElementById("volumeBar").addEventListener('input', async () => {
  this.min = 0;
  this.max = 100;
  var value = (this.value-this.min)/(this.max-this.min)*100;
  this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)';
  console.log("ASJDASKF");
});;

document.getElementById('gridCount').addEventListener('input', async () => {
  let sliderValue = document.getElementById('gridCount').value;
  document.getElementById('demo').innerHTML=sliderValue;
  const grid = document.getElementById('grid');
  console.log(document.getElementById('grid').childNodes.length, sliderValue, Math.abs(grid.childNodes.length - sliderValue));
  while (sliderValue != grid.childNodes.length){
    if (sliderValue > grid.childNodes.length) {
      const node = document.createElement('div');
      node.className = "grid-item"
      var img = document.createElement("img")
      img.src = "NOTFOUND.png"
      img.className = "thumbnail"
      node.appendChild(img);
      grid.appendChild(node);
    } else {
      grid.removeChild(grid.lastChild);
  }}
})