import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';
import { OrderChartOption } from '../../../../shared/interface/widgets/chart';

@Component({
  selector: 'app-top-ecommerce-chart',
  imports: [CommonModule, NgApexchartsModule, Feathericon],
  templateUrl: './top-ecommerce-chart.html',
  styleUrl: './top-ecommerce-chart.scss',
})
export class TopEcommerceChart {
  readonly data = input<OrderChartOption>();
}
