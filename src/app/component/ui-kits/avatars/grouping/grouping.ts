import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Group } from '../../../../shared/data/ui-kits/avavtar';

@Component({
  selector: 'app-grouping',
  imports: [CommonModule],
  templateUrl: './grouping.html',
  styleUrl: './grouping.scss',
})
export class Grouping {
  public groupingdata = Group;
}
