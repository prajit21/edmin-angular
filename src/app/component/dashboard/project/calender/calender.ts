import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbCalendar, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-calender',
  imports: [NgbModule, Feathericon, RouterModule],
  templateUrl: './calender.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './calender.scss',
})
export class Calender {
  public date: { year: number; month: number } | undefined;
  private calendar = inject(NgbCalendar);
}
