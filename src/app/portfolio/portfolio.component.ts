import {Component, OnInit} from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {PotfolioImage} from "./models/portfolio-image";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  images: PotfolioImage[] = [
    new PotfolioImage(1, "WC suspendu et Revêtement mural intérieur"),
    new PotfolioImage(2, "Revêtement mural intérieur"),
    new PotfolioImage(3, "Revêtement mural intérieur"),
    new PotfolioImage(4, "Revêtement mural intérieur"),
    new PotfolioImage(5, "Revêtement mural intérieur"),
    new PotfolioImage(6, "Revêtement mural intérieur"),
    new PotfolioImage(7, "Revêtement mural intérieur"),
    new PotfolioImage(8, "Revêtement mural intérieur")
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 500;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

}
