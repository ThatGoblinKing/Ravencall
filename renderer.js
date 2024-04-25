document.getElementById("testButton").addEventListener('click', async () => {
    console.log("TEST");
    const node = document.createTextNode("My name is Inigo Montoya. You killed my father. Prepare to die.")

    document.getElementById("mainBody").appendChild(node);
})




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
      img.src = "1200px-Checkerboard_pattern (Custom).png"
      img.style.height = 100
      img.style.width = 100
      node.appendChild(img);
      grid.appendChild(node);
    } else {
      grid.removeChild(grid.lastChild);
  }}
})