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
      node.appendChild(document.createTextNode("EXAMPLE"));
      grid.appendChild(node);
    } else {
      grid.removeChild(grid.lastChild);
  }}
})