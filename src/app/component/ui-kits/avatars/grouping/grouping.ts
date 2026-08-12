import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Group } from '../../../../shared/data/ui-kits/avavtar';

@Component({
  selector: 'app-grouping',
  imports: [],
  templateUrl: './grouping.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './grouping.scss',
})
export class Grouping {
  public groupingdata = Group;
}
