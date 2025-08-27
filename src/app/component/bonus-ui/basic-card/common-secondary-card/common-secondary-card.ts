import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { commonSecondaryData } from '../../../../shared/data/bonus-ui/basic-card';

@Component({
  selector: 'app-common-secondary-card',
  imports: [CommonModule],
  templateUrl: './common-secondary-card.html',
  styleUrl: './common-secondary-card.scss',
})
export class CommonSecondaryCard {
  public SecondaryData = commonSecondaryData;
}
