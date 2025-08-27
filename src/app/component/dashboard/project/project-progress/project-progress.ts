import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Projectprogress } from '../../../../shared/data/dashboard/project/project';

@Component({
  selector: 'app-project-progress',
  imports: [CommonModule],
  templateUrl: './project-progress.html',
  styleUrl: './project-progress.scss',
})
export class ProjectProgress {
  public projectProgress = Projectprogress;
}
