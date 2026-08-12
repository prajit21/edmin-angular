import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Projectprogress } from '../../../../shared/data/dashboard/project/project';

@Component({
  selector: 'app-project-progress',
  templateUrl: './project-progress.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './project-progress.scss',
})
export class ProjectProgress {
  public projectProgress = Projectprogress;
}
