export interface ImageUris {
  small: string;
  normal: string;
  large: string;
  png: string;
  art_crop: string;
  border_crop: string;
}

export interface Legalities {
  standard: string;
  future: string;
  frontier: string;
  modern: string;
  legacy: string;
  pauper: string;
  vintage: string;
  penny: string;
  commander: string;
  duel: string;
  oldschool: string;
}

export interface Prices {
  usd?: any;
  usd_foil?: any;
  eur?: any;
  tix?: any;
}

export interface RelatedUris {
  gatherer: string;
  tcgplayer_decks: string;
  edhrec: string;
  mtgtop8: string;
}

export interface PurchaseUris {
  tcgplayer: string;
  cardmarket: string;
  cardhoarder: string;
}

export interface Datum {
  object: string;
  id: string;
  oracle_id: string;
  multiverse_ids: number[];
  name: string;
  printed_name: string;
  lang: string;
  released_at: string;
  uri: string;
  scryfall_uri: string;
  layout: string;
  highres_image: boolean;
  image_uris: ImageUris;
  mana_cost: string;
  cmc: number;
  type_line: string;
  printed_type_line: string;
  oracle_text: string;
  printed_text: string;
  colors: string[];
  color_identity: string[];
  legalities: Legalities;
  games: string[];
  reserved: boolean;
  foil: boolean;
  nonfoil: boolean;
  oversized: boolean;
  promo: boolean;
  reprint: boolean;
  set: string;
  set_name: string;
  set_uri: string;
  set_search_uri: string;
  scryfall_set_uri: string;
  rulings_uri: string;
  prints_search_uri: string;
  collector_number: string;
  digital: boolean;
  rarity: string;
  watermark: string;
  flavor_text: string;
  illustration_id: string;
  artist: string;
  border_color: string;
  frame: string;
  frame_effect: string;
  full_art: boolean;
  story_spotlight: boolean;
  edhrec_rank: number;
  prices: Prices;
  related_uris: RelatedUris;
  purchase_uris: PurchaseUris;
}

export interface Cards {
  object: string;
  total_cards: number;
  has_more: boolean;
  next_page: string;
  data: Datum[];
}

export interface CardsAutocomplete {
  object: string;
  total_values: number;
  data: string[];
}
