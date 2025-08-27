import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-tooltip',
  imports: [CommonModule, NgbModule],
  templateUrl: './image-tooltip.html',
  styleUrl: './image-tooltip.scss',
})
export class ImageTooltip {}
