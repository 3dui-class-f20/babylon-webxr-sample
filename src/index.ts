import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { Vector3 } from "@babylonjs/core/Maths/math";
import { FreeCamera } from "@babylonjs/core/Cameras/freeCamera";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { PointLight } from "@babylonjs/core/Lights/pointLight";
import "@babylonjs/core/Materials/standardMaterial";
import "@babylonjs/core/Helpers/sceneHelpers";

// Required side effects to populate the Create methods on the mesh class. Without this, the bundle would be smaller but the createXXX methods from mesh would not be accessible.
import {MeshBuilder} from  "@babylonjs/core/Meshes/meshBuilder";

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement; // Get the canvas element 
const engine = new Engine(canvas, true); // Generate the BABYLON 3D engine


/******* Add the Playground Class with a static CreateScene function ******/
const createScene = async function(engine: Engine, canvas: HTMLCanvasElement) {
    // Create the scene space
    const scene = new Scene(engine);

    // This creates and positions a free camera (non-mesh)
    var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // Add lights to the scene
    new HemisphericLight("light1", new Vector3(1, 1, 0), scene);
    new PointLight("light2", new Vector3(0, 1, -1), scene);

    // Add and manipulate meshes in the scene
    var sphere = MeshBuilder.CreateSphere("sphere", {diameter:2}, scene);
    // Move the sphere upward 1/2 its height
    sphere.position.y = 1;

    const environment = scene.createDefaultEnvironment();

    // XR
    const xrHelper = await scene.createDefaultXRExperienceAsync({
        floorMeshes: [environment!.ground!]
    });

    return scene;
}


/******* End of the create scene function ******/    
// code to use the Class above
// const createScene =  function() { 
//     return await Playground.CreateScene(engine, 
//         engine.getRenderingCanvas() as HTMLCanvasElement); 
// }

createScene(engine, engine.getRenderingCanvas() as HTMLCanvasElement).then(
    function (scene: Scene) {
        // Register a render loop to repeatedly render the scene
        engine.runRenderLoop(function () { 
            scene.render();
        });

        // Watch for browser/canvas resize events
        window.addEventListener("resize", function () { 
            engine.resize();
        });

    }
)
