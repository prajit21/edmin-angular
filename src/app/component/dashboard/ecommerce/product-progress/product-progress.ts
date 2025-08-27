import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { SvgIcon } from '../../../../shared/component/svg-icon/svg-icon';

@Component({
  selector: 'app-product-progress',
  imports: [CommonModule, SvgIcon],
  templateUrl: './product-progress.html',
  styleUrl: './product-progress.scss',
})
export class ProductProgress {}
