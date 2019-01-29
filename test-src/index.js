import SharkViewer from "../src/shark_viewer";
import { swcParser } from "../src/viewer/util";

let mdata;
function readSwcFile(e) {
 const f = e.target.files[0];
  if (f) {
    const r = new FileReader();
    r.onload = function(e2) {
      const swcTxt = e2.target.result;
      const  swc = swcParser(swcTxt);
      if (Object.keys(swc).length > 0) {
        document.getElementById("container").innerHTML = "";
        const s = new SharkViewer({
          swc,
          dom_element: "container",
          metadata: mdata
        });
        s.init();
        s.animate();
      } else {
        alert("Please upload a valid swc file.");
      }
    };
    r.readAsText(f);
  } else {
    alert("Failed to load file");
  }
}

window.onload = function() {
  document
    .getElementById("swc_input")
    .addEventListener("change", readSwcFile, false);
  const swc = swcParser(document.getElementById("swc").text);
  mdata = JSON.parse(document.getElementById("metadata_swc").text);
  const s = new SharkViewer({
    dom_element: "container",
    metadata: mdata,
    centerpoint: [24,18,0]
  });
  window.s = s;
  s.init();
  s.animate();
  const swc2 = swcParser(document.getElementById("swc2").text);
  s.loadNeuron('swc2', null, swc2);
  s.loadNeuron('swc', null, swc);
};
