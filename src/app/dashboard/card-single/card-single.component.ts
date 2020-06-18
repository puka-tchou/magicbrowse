import {
  Component,
  OnInit,
  Input,
  OnChanges,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { MagicTheGatheringService } from 'src/app/shared/services/magic-the-gathering.service';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  MeshBasicMaterial,
  Mesh,
  PlaneGeometry,
  Color,
  TextureLoader,
  DoubleSide,
  FrontSide,
  BackSide,
  Object3D,
  Matrix4,
} from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';

@Component({
  selector: 'app-card-single',
  templateUrl: './card-single.component.html',
  styleUrls: ['./card-single.component.scss'],
})
export class CardSingleComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() image: string;
  @ViewChild('container') div;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {}

  ngAfterViewInit() {
    this.createScene(this.div.nativeElement, this.image);
  }

  createScene(container: HTMLElement, image: string) {
    const size =
      window.innerWidth < window.innerHeight
        ? window.innerWidth
        : window.innerHeight;
    console.log(size);
    // Create a scene
    const scene = new Scene();
    // Create a camera
    const camera = new PerspectiveCamera(45);
    // Setup Orbit controls
    const controls = new OrbitControls(camera);
    // Tweaks renderer options
    const renderer = new WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(size, size);
    renderer.setClearColor(0xff0000, 0);
    container.appendChild(renderer.domElement);
    // Create both sides of a a plane
    const geometryFront = new PlaneGeometry(0.715668161, 1);
    const geometryBack = new PlaneGeometry(0.715668161, 1);
    // Rotate backside 180deg
    geometryBack.applyMatrix4(new Matrix4().makeRotationY(Math.PI));
    // Define front and back texture
    const textureFront = new TextureLoader().load(image);
    const textureBack = new TextureLoader().load('assets/back.png');
    // Asign textures to the fontside and the backside of the plane
    const materialFront = new MeshBasicMaterial({
      map: textureFront,
    });
    const materialBack = new MeshBasicMaterial({
      map: textureBack,
    });
    // Create a 3D object
    const card = new Object3D();
    // And add it to the scene
    scene.add(card);
    // Create meshes and add them to the card
    const meshFront = new Mesh(geometryFront, materialFront);
    card.add(meshFront);
    const meshBack = new Mesh(geometryBack, materialBack);
    card.add(meshBack);
    // Set camera position and update it on user interaction
    camera.position.z = 2;
    controls.update();

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
  }

  // clearScene() {
  //   cancelAnimationFrame(this.id); // Stop the animation
  //   this.renderer.domElement.addEventListener('dblclick', null, false); //remove listener to render
  //   this.scene = null;
  //   this.projector = null;
  //   this.camera = null;
  //   this.controls = null;
  //   empty(this.modelContainer);
  // }
}
