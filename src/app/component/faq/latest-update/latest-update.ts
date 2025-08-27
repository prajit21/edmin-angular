import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { LatestUpdates } from '../../../shared/data/faq/faq';

@Component({
  selector: 'app-latest-update',
  imports: [CommonModule],
  templateUrl: './latest-update.html',
  styleUrl: './latest-update.scss',
})
export class LatestUpdate {
  public update = LatestUpdates;
}
