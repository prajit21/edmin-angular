import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts';

import * as chartData from '../../../../shared/data/charts/chartjs';

@Component({
  selector: 'app-donut-graph',
  imports: [BaseChartDirective],
  templateUrl: './donut-graph.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './donut-graph.scss',
})
export class DonutGraph {
  public DontLabels = chartData.DonutLabels;
  public DontData = chartData.DonutData;
  public DontType = chartData.DonutType;
  public DontOptions = chartData.DonutOptions;
}
