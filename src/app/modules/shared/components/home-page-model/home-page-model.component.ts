import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

@Component({
  selector: 'app-home-page-model',
  templateUrl: './home-page-model.component.html',
  styleUrls: ['./home-page-model.component.scss']
})
export class HomePageModelComponent implements OnInit, AfterViewInit {

  @ViewChild('renderContainer') renderContainer: ElementRef;

  @Input() height: number;
  @Input() width: number;
  @Input() modelPath: string;

  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  loader: GLTFLoader;
  light: THREE.Light;

  constructor() {
    this.renderer = new THREE.WebGLRenderer();
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 1000;

    this.light = new THREE.AmbientLight(0x404040); // soft white light
    this.scene.add(this.light);

    this.loader = new GLTFLoader();
  }

  ngOnInit() {
    this.modelPath = this.modelPath || '../../../../../assets/models/sword.glb';
  }

  ngAfterViewInit() {
    this.loader.load(
      this.modelPath,
      (gltf => {
        this.scene.add(gltf.scene);
        console.log(gltf);
      }),
      (xhr => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      }),
      (err => {
        console.error(`ERROR: ${err.error}, ${err.message}`);
      })
    );
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0x000000, 1);
    this.renderContainer.nativeElement.appendChild(this.renderer.domElement);
    this.renderer.render(this.scene, this.camera);
  }

}
