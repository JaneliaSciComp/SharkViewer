/* global sharkViewer */
let s = null;

let mdata;
function readSwcFile(e) {
 const f = e.target.files[0];
  if (f) {
    const r = new FileReader();
    r.onload = (e2) => {
      const swcTxt = e2.target.result;
      const  swc = sharkViewer.swcParser(swcTxt);
      if (Object.keys(swc).length > 0) {
        s.loadNeuron('foo', '#ff0000', swc, true, false, true);
        s.render();
      } else {
        alert("Please upload a valid swc file.");
      }
    };
    r.readAsText(f);
  } else {
    alert("Failed to load file");
  }
}

function readObjFile(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const objText = event.target.result;
      s.loadCompartment('foo', '#ff0000', objText);
      s.render();
    };
    reader.readAsText(file);
  }
}


window.onload = () => {
  document
    .getElementById("swc_input")
    .addEventListener("change", readSwcFile, false);
  document
    .getElementById("obj_input")
    .addEventListener("change", readObjFile, false);
  const swc = sharkViewer.swcParser(document.getElementById("swc").text);
  mdata = JSON.parse(document.getElementById("metadata_swc").text);
  s = new sharkViewer.default({
    animated: false,
    mode: 'particle',
    dom_element: document.getElementById('container'),
    metadata: mdata,
    showAxes: 10000,
    maxVolumeSize: 5000,
    cameraChangeCallback: () => { }
  });
  window.s = s;
  s.init();
  s.animate();
  // const swc2 = sharkViewer.swcParser(document.getElementById("swc2").text);
  // s.loadNeuron('swc2', '#ff0000', swc2);
  s.loadNeuron('swc', null, swc, true, false, true);
  s.render();
};
