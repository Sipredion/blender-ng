import {Injectable} from '@angular/core';
import {GLTF, GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

@Injectable({
  providedIn: 'root'
})
export class RenderService {



  constructor() {
  }

  public loadGltfObject(modelPath) {
    const loader = new GLTFLoader();
    return loader.load(
      modelPath,
      ((gltf: GLTF) => {
        gltf.scene.scale.set(2, 2, 2);
        gltf.scene.position.x = 0; // Position (x = right+ left-)
        gltf.scene.position.y = 0; // Position (y = up+, down-)
        gltf.scene.position.z = 0; // Position (z = front +, back-)
        return gltf.scene;
      }),
      (xhr => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      }),
      (err => {
        console.error(`ERROR: ${err.error}, ${err.message}`);
      })
    );
  }

  public render(renderer, scene, camera) {
    renderer.render(scene, camera);
  }
}
