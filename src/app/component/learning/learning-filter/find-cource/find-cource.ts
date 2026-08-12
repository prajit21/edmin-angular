import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { findCourse } from '../../../../shared/data/learning/learning';

@Component({
  selector: 'app-find-cource',
  imports: [FormsModule, NgbModule],
  templateUrl: './find-cource.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './find-cource.scss',
})
export class FindCource {
  public findCourse = findCourse;
  public isCollapsed = false;
}
