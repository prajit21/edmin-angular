import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Friday } from './friday/friday';
import { Monday } from './monday/monday';
import { Thursday } from './thursday/thursday';
import { Tuesday } from './tuesday/tuesday';
import { Wednesday } from './wednesday/wednesday';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-schedule-time',
  imports: [CommonModule, Monday, Thursday, Wednesday, Tuesday, Friday, ClickOutsideDirective],
  templateUrl: './schedule-time.html',
  styleUrl: './schedule-time.scss',
})
export class ScheduleTime {
  public openTab: string = 'mon';
  public isopen: boolean = false;

  open() {
    this.isopen = !this.isopen;
  }

  clickOutside(): void {
    this.isopen = false;
  }

  public tabbed(val: string) {
    this.openTab = val;
  }
}
