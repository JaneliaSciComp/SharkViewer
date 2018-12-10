import SharkViewer from "./shark_viewer";
import { swc_parser } from "./viewer/util";

let mdata;
function readSwcFile(e) {
 const f = e.target.files[0];
  console.log(f);
  if (f) {
    const r = new FileReader();
    r.onload = function(e2) {
      const swcTxt = e2.target.result;
      const  swc = swc_parser(swcTxt);
      if (Object.keys(swc).length > 0) {
        document.getElementById("container").innerHTML = "";
        const s = new SharkViewer({
          swc,
          dom_element: "container",
          center_node: -1,
          show_stats: true,
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
  const swc = swc_parser(document.getElementById("swc").text);
  mdata = JSON.parse(document.getElementById("metadata_swc").text);
  const s = new SharkViewer({
    swc,
    dom_element: "container",
    center_node: -1,
    show_stats: true,
    metadata: mdata
  });
  s.init();
  s.animate();
};
