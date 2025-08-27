import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { breckpointSpecific } from '../../../../../shared/data/table/basic-tables';

@Component({
  selector: 'app-breckpoint-specific',
  imports: [CommonModule],
  templateUrl: './breckpoint-specific.html',
  styleUrl: './breckpoint-specific.scss',
})
export class BreckpointSpecific {
  public breckpointData = breckpointSpecific;
}
