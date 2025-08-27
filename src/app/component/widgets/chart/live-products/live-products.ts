import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { LiveProduct } from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-live-products',
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './live-products.html',
  styleUrl: './live-products.scss',
})
export class LiveProducts {
  public LiveProductChart = LiveProduct;
}
