import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { BadgePartButtons } from '../../../../shared/data/ui-kits/tag-pills';

@Component({
  selector: 'app-badges-buttons',
  imports: [CommonModule],
  templateUrl: './badges-buttons.html',
  styleUrl: './badges-buttons.scss',
})
export class BadgesButtons {
  public buttonspartData = BadgePartButtons;
}
