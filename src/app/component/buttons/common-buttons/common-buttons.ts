import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import * as data from '../../../shared/data/buttons/buttons';

@Component({
  selector: 'app-common-buttons',
  imports: [],
  templateUrl: './common-buttons.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './common-buttons.scss',
})
export class CommonButtons {
  readonly data = input<data.Button[]>();
}
