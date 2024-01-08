export class PotfolioImage {
  url: string;

  order: number;
  text: string;
  defaultUrl= "assets/portfolio/portfolio-";
  defaultExtension= ".jpg";


  constructor(order: number, text: string) {
    this.url = this.defaultUrl + order.toString() + this.defaultExtension;
    this.order = order;
    this.text = text;
  }
}
