![Picture](html/images/SharkLogo.png)

![Picture](https://zenodo.org/badge/doi/10.5281/zenodo.10053.png)

# Shark Viewer

## NEW
**09-26-2014** - Synapse Annotations. Load annotations from a separate file with format "x y z\n" for each annotation. You can use annotation\_parser(annotation\_text) to parse it into the format [{'x': x, 'y': y, 'z':z}, {'x': x1, 'y': y1, 'z':z1}, ..., {'x': xn, 'y': yn, 'z':zn}] and load that into the annotation property of SharkViewer.

**08-08-2014** - Three.js loader version: html/js/sharkviewer_loader.js
If you want to use the neuron rendered from SharkViewer in another scene use this version. html/Shark\_Viewer\_Loader\_Version.html shows an example of how to use it.

**06-18-2014** - Serverless SharkViewer! Now the html/Shark\_Viewer.html file allows you to load and view your own SWC files without a server. Simply download the repository and open Shark\_Viewer.html in a browser, then use the form to view your own SWC files.

## DESCRIPTION
SharkViewer is a web-based viewer for SWC neuron files. It is written entirely in JavaScript using Three.js.
To view SWC format guidelines visit: http://research.mssm.edu/cnic/swc.html

## EXAMPLE
http://janeliascicomp.github.io/SharkViewer/

## QUICK START
1. Install the dependencies
```zsh
npm install
```
1. Start up a test server
```zsh
npm run start
```
1. Click 'Choose File' button to load a SWC file.

## USAGE

### AS A MODULE
1. fetch the package
```
npm install @janelia/sharkviewer
```
1. import
```javascript
import SharkViewer, { swcParser } from sharkViewer;
```
1. Create a new SharkViewer object. At a minimum you need to give it a DOM element to attach a canvas to.
```javascript
var s = new sharkViewer({ dom_element: 'container' });
```
1. Initialize the SharkViewer
```javascript
s.init();
```
1. Animate the SharkViewer
```javascript
s.animate();
```
1. load in a neuron swc file.
```javascript
const swcJSON = swcParser(swcText);
s.loadNeuron('neuron_name', '#ff0000', swcJSON);
```


### AS A LIBRARY
1. download this repository
1. copy lib/shark_viewer.js and lib/three.min.js into your project
1. Load the javascript files into your page
```HTML
<script src="three.min.js"></script>
<script src="shark_viewer.js"></script>
```
1. Create a new SharkViewer object. At a minimum you need to give it a DOM element to attach a canvas to.
```javascript
var s = new sharkViewer.default({ swc: swc, dom_element: 'container' });
```
1. Initialize the SharkViewer
```javascript
s.init();
```
1. Animate the SharkViewer
```javascript
s.animate();
```
1. Load an SWC file into json. There is a helper function swcParser(swcText) available, or you can write your own to process it server side and load via AJAX.
```javascript
var swcJSON = sharkViewer.swcParser(swcTxt); ;
s.loadNeuron('neuron_name', '#ff0000', swcJSON);
```

lib/index.html shows an example of this setup.

### sharkViewer.default()

Create a new SharkViewer instance to display a collection of neurons.

#### Arguments

* dom_element - html element that will receive the webgl canvas
  * *Default*: 'container'

* mode - sphere (full 3-D rendering for nodes and connections, slow), particle (uses particle system to speed rendering and make it look better), or skeleton (no nodes, just connections, very fast)
  * *Default*: 'particle'

* show_cones - show cones between cylinders for particle and sphere mode
  * *Default*: true;

* colors - color array for display, nodes of type 0 show as first color, etc.
  * *Default*:
    ```
    [
	    0x00be9e,
	    0x3919cb,
	    0x7d0bc4,
	    0xff6700,
	    0x3eef00,
	    0xffce00,
	    0xf50027,
	    0x606060,
    ]
    ```
* metadata - array of javascript objects with labels and type numbers to display as legend (type number matches to type column in swc file)  format:
  * *Default*: false
  * Example:
```
[{"label":"undefined","type":0},{"label":"soma","type":1}]
```
* annotation - array of javascript objects with x, y, z coordinates to display as synapse annotations.
  * *Default*: false
  * Example:
```
[{'x': x, 'y': y, 'z':z}, {'x': x1, 'y': y1, 'z':z1}, ..., {'x': xn, 'y': yn, 'z':zn}]
```
* annotation_color - color to display annotations

  *Default* 0x111111

### sharkViewer.swcParser(swcText)

Parse SWC files into a JSON format for loading into the viewer.

#### Arguments

* **swcText** [string]:
    An SWC file based on the format described at [http://research.mssm.edu/cnic/swc.html](http://research.mssm.edu/cnic/swc.html)


### sharkViewer.loadNeuron(name, color, swcJSON, updateCamera)

Load a neuron SWC JSON object into the viewer and center the camera around it.

#### Arguments

* **name** [string]: A simple text string used to identify the object.
  Used by other functions to remove or hide it.
* **color** [string]: Hexadecimal string to determine the color of the neuron.
* **swcJSON** [JSON]: JSON string representation of the SWC file. A description of
the expected format is shown below.
```javascript
swc json object: {
    id : {
        type: <type number of node (string)>,
        x: <x position of node (float)>,
        y: <y position of node (float)>,
        z: <z position of node (float)>,
        parent: <id number of node's parent (-1 if no parent)>,
        radius: <radius of node (float)>,
    }
}
```
* **updateCamera** [boolean]: If false the camera will not center around the newly added object.

### unloadNeuron(name)

Remove the neuron from memory and stop displaying it.

#### Arguments

* **name** [string]: The name used when loading the neuron.

### setNeuronVisible(name, visible)

Show or hide the neuron object, without removing it from the scene.

#### Arguments

* **name** [string]: The name used when loading the neuron.
* **visible** [boolean]: true to show the neuron, false to hide it.


## Author Information
SharkViewer was originally written by Charlotte Weaver (<weaverc10@janelia.hhmi.org>) and Christopher Bruns (<brunsc@janelia.hhmi.org>)

## Contributors
- Patrick Edson
- Jody Clements
- Phillip Hubbard

[![Janelia Research Campus](html/images/hhmi_janelia_transparentbkgrnd.png)](http://www.janelia.org)

[Scientific Computing](http://www.janelia.org/research-resources/computing-resources)

[Janelia Research Campus](http://www.janelia.org)

[Howard Hughes Medical Institute](http://www.hhmi.org)
