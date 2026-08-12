import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { TotalProjects } from '../../../../shared/data/dashboard/project/project-chart';

@Component({
  selector: 'app-total-project',
  imports: [NgApexchartsModule],
  templateUrl: './total-project.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './total-project.scss',
})
export class TotalProject {
  public ProjectData = TotalProjects;
}
