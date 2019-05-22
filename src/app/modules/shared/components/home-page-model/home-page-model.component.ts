import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as THREE from 'three';
import {GLTF, GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {RenderService} from '../../services/render.service';

@Component({
  selector: 'app-home-page-model',
  templateUrl: './home-page-model.component.html',
  styleUrls: ['./home-page-model.component.scss']
})
export class HomePageModelComponent implements OnInit, AfterViewInit {

  @ViewChild('renderContainer') renderContainer: ElementRef;

  @Input() height = window.innerHeight - 50;
  @Input() width = window.innerWidth - 100;
  @Input() modelPath = '../../../../../assets/models/sword.glb';

  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  loader: GLTFLoader;

  orbitalControls: OrbitControls;

  constructor(private renderService: RenderService) {
  }

  ngOnInit() {
    // Create the Scene
    this.scene = new THREE.Scene();

    // Add a camera
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.set(1, 1, 20);

    // Configure renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(0x000000, 1);
    this.renderContainer.nativeElement.appendChild(this.renderer.domElement);

    // Initialize loader
    this.loader = new GLTFLoader();

    // Add Controls
    this.orbitalControls = new OrbitControls(this.camera, this.renderer.domElement);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xcccccc);
    this.scene.add(ambientLight);

    // Add directional light light
    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(0, 1, 1).normalize();
    this.scene.add(directionalLight);
  }

  ngAfterViewInit() {
    this.loader.load(
      this.modelPath,
      ((gltf: GLTF) => {
        gltf.scene.scale.set(2, 2, 2);
        gltf.scene.position.x = 0; // Position (x = right+ left-)
        gltf.scene.position.y = 0; // Position (y = up+, down-)
        gltf.scene.position.z = 0; // Position (z = front +, back-)
        this.scene.add(gltf.scene);
      }),
      (xhr => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      }),
      (err => {
        console.error(`ERROR: ${err.error}, ${err.message}`);
      })
    );
    this.render(this.renderer, this.scene, this.camera);
  }

  render(renderer, scene, camera) {
    this.renderService.render(renderer, scene, camera);
  }

}
