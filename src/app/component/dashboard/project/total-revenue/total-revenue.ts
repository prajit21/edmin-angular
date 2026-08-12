import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { TotalRevenues } from '../../../../shared/data/dashboard/project/project-chart';

@Component({
  selector: 'app-total-revenue',
  imports: [NgApexchartsModule],
  templateUrl: './total-revenue.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './total-revenue.scss',
})
export class TotalRevenue {
  public RevenuData = TotalRevenues;
}
