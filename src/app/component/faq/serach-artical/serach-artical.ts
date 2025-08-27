import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Feathericon } from '../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-serach-artical',
  imports: [CommonModule, Feathericon],
  templateUrl: './serach-artical.html',
  styleUrl: './serach-artical.scss',
})
export class SerachArtical {}
