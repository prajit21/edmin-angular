import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Bordercolors } from '../../../../shared/data/ui-kits/helper-classes';

@Component({
  selector: 'app-border-color',
  imports: [CommonModule],
  templateUrl: './border-color.html',
  styleUrl: './border-color.scss',
})
export class BorderColor {
  public borderColorData = Bordercolors;
}
