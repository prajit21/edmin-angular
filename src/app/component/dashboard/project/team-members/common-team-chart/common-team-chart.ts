import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { SparklineChart } from '../../../../../shared/interface/dashboard/chart';

@Component({
  selector: 'app-common-team-chart',
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './common-team-chart.html',
  styleUrl: './common-team-chart.scss',
})
export class CommonTeamChart {
  readonly data = input<SparklineChart>();
}
