import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { TotalRevenues } from '../../../../shared/data/dashboard/project/project-chart';

@Component({
  selector: 'app-total-revenue',
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './total-revenue.html',
  styleUrl: './total-revenue.scss',
})
export class TotalRevenue {
  public RevenuData = TotalRevenues;
}
