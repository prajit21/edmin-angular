import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inline-input-type',
  imports: [FormsModule],
  templateUrl: './inline-input-type.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './inline-input-type.scss',
})
export class InlineInputType {}
