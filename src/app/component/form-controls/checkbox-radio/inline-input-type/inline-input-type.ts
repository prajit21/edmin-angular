import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inline-input-type',
  imports: [CommonModule, FormsModule],
  templateUrl: './inline-input-type.html',
  styleUrl: './inline-input-type.scss',
})
export class InlineInputType {}
