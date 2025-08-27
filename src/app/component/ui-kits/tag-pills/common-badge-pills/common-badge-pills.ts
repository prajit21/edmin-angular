import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { button } from '../../../../shared/data/ui-kits/tag-pills';

@Component({
  selector: 'app-common-badge-pills',
  imports: [CommonModule],
  templateUrl: './common-badge-pills.html',
  styleUrl: './common-badge-pills.scss',
})
export class CommonBadgePills {
  readonly data = input<button[]>();
}
