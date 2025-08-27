import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { TotalProjects } from '../../../../shared/data/dashboard/project/project-chart';

@Component({
  selector: 'app-total-project',
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './total-project.html',
  styleUrl: './total-project.scss',
})
export class TotalProject {
  public ProjectData = TotalProjects;
}
