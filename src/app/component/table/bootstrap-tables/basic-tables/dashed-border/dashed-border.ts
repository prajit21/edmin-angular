import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { DashedBorders } from '../../../../../shared/data/table/basic-tables';

@Component({
  selector: 'app-dashed-border',
  imports: [CommonModule],
  templateUrl: './dashed-border.html',
  styleUrl: './dashed-border.scss',
})
export class DashedBorder {
  public dashborderData = DashedBorders;
}
