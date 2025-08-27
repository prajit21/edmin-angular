import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { monthlyHistoryData } from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-monthly-history',
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './monthly-history.html',
  styleUrl: './monthly-history.scss',
})
export class MonthlyHistory {
  public MonthlyHistoryData = monthlyHistoryData;
}
