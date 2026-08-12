import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';
import { OrderChartOption } from '../../../../shared/interface/widgets/chart';

@Component({
  selector: 'app-top-ecommerce-chart',
  imports: [NgApexchartsModule, Feathericon],
  templateUrl: './top-ecommerce-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './top-ecommerce-chart.scss',
})
export class TopEcommerceChart {
  readonly data = input<OrderChartOption>();
}
