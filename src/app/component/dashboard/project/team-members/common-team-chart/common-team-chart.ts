import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { SparklineChart } from '../../../../../shared/interface/dashboard/chart';

@Component({
  selector: 'app-common-team-chart',
  imports: [NgApexchartsModule],
  templateUrl: './common-team-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './common-team-chart.scss',
})
export class CommonTeamChart {
  readonly data = input<SparklineChart>();
}
