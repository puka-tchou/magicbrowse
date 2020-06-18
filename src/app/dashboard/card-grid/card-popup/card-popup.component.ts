import {
  Component,
  OnInit,
  Inject,
  Input,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  PlaneGeometry,
  Matrix4,
  TextureLoader,
  MeshBasicMaterial,
  Object3D,
  Mesh,
} from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { empty } from 'rxjs';

@Component({
  selector: 'app-card-popup',
  templateUrl: './card-popup.component.html',
  styleUrls: ['./card-popup.component.scss'],
})
export class CardPopupComponent implements OnInit, AfterViewInit {
  // @Input() image: string;
  @ViewChild('container') div;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<CardPopupComponent>
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.scene('create');
  }

  scene(manage: string) {
    if ('create' === manage) {
      const container = this.div.nativeElement;
      const image = this.data.imageUris;
      const size =
        window.innerWidth < window.innerHeight
          ? window.innerWidth
          : window.innerHeight;
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
    if ('delete' === manage) {
      this.closeDialog();
      // TODO: properly clear the scene
      // while (this.scene.children > 0) {
      // this.scene.remove(this.scene.children[0]);
      // }
    }
  }

  closeDialog() {
    this.dialogRef.close('Closed dialog and cleared scene');
  }
}
