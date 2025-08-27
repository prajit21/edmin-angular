import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { Finances } from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-finance',
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './finance.html',
  styleUrl: './finance.scss',
})
export class Finance {
  public financesData = Finances;
}
