class CardUris {
  public png: string;
  public small: string;
}

class CardDataModel {
  public name: string;
  public image_uris: CardUris[];
}
export class MagicTheGatheringModel {
  public data: CardDataModel[];
}
