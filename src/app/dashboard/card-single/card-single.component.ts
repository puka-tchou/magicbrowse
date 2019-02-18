import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { MagicTheGatheringService } from 'src/app/shared/services/magic-the-gathering.service';
import { SingleCardModel } from 'src/app/shared/models/magicthegathering/card-list/single-card.model';
import { CardModel } from 'src/app/shared/models/magicthegathering/card-list/card.model';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  MeshBasicMaterial,
  Mesh,
  PlaneGeometry,
  Color,
  TextureLoader,
  DoubleSide
} from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';

@Component({
  selector: 'app-card-single',
  templateUrl: './card-single.component.html',
  styleUrls: ['./card-single.component.scss']
})
export class CardSingleComponent implements OnInit, OnChanges {
  @Input() imageUrl: string;
  @ViewChild('container') div;
  public card: CardModel;

  constructor(private magicTheGatheringService: MagicTheGatheringService) {}

  ngOnInit() {
    // if (this.id) {
    //   this.magicTheGatheringService.getCardsById(this.id).subscribe(
    //     (data: SingleCardModel) => {
    //       this.card = data.card;
    //       console.log(this.card);
    //     },
    //     err => {
    //       console.error(err);
    //     }
    //   );
    // }
  }

  ngOnChanges() {}

  ngAfterViewInit() {
    this.createScene(this.div.nativeElement);
  }

  createScene(container) {
    const scene = new Scene();
    scene.background = new Color(0xffffff);

    const camera = new PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    const controls = new OrbitControls(camera);

    const renderer = new WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.setSize(500, 500);
    container.appendChild(renderer.domElement);

    const geometry = new PlaneGeometry();
    const texture = new TextureLoader().load('assets/Image.jpeg');
    const material = new MeshBasicMaterial({ map: texture, side: DoubleSide });
    const plane = new Mesh(geometry, material);
    scene.add(plane);

    camera.position.z = 5;
    controls.update();

    const animate = function() {
      requestAnimationFrame(animate);

      // plane.rotation.x += 0.01;
      // plane.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }
}
