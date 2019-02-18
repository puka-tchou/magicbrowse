import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MagicTheGatheringService } from 'src/app/shared/services/magic-the-gathering.service';
import { SingleCardModel } from 'src/app/shared/models/magicthegathering/card-list/single-card.model';
import { CardModel } from 'src/app/shared/models/magicthegathering/card-list/card.model';

@Component({
  selector: 'app-card-single',
  templateUrl: './card-single.component.html',
  styleUrls: ['./card-single.component.scss']
})
export class CardSingleComponent implements OnInit, OnChanges {
  @Input() imageUrl: string;
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
}
