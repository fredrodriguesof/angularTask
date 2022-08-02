export class Coin {
  public id: string;
  public symbol: string;
  public name: string;
}

export class CoinDetail {
  public id: string;
  public symbol: string;
  public name: string;
  public genesis_date: string;
  public categories: string[];
  public desc: string;
  public image: Image;
}

export class Image {
  public large: string;
}
