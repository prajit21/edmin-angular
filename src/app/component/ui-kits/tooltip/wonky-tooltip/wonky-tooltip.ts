import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wonky-tooltip',
  imports: [CommonModule, NgbModule],
  templateUrl: './wonky-tooltip.html',
  styleUrl: './wonky-tooltip.scss',
})
export class WonkyTooltip {}
