import { Component, ChangeDetectionStrategy } from '@angular/core';

import { SvgIcon } from '../../../../shared/component/svg-icon/svg-icon';

@Component({
  selector: 'app-product-progress',
  imports: [SvgIcon],
  templateUrl: './product-progress.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './product-progress.scss',
})
export class ProductProgress {}
