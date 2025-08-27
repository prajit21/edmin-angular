import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-brand',
  imports: [CommonModule, Feathericon],
  templateUrl: './brand.html',
  styleUrl: './brand.scss',
})
export class Brand {}
