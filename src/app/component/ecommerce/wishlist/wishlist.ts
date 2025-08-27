import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import { wishlist } from '../../../shared/data/ecommerce/wishlist';

@Component({
  selector: 'app-wishlist',
  imports: [CommonModule, RouterModule, NgbModule],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.scss',
})
export class Wishlist {
  public WishistData = wishlist;

  public config = inject(NgbRatingConfig);

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }
}
