import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-java-script-behavior',
  imports: [CommonModule, NgbModule],
  templateUrl: './java-script-behavior.html',
  styleUrl: './java-script-behavior.scss',
})
export class JavaScriptBehavior {
  public active = 1;
}
