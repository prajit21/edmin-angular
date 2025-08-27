import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CommentOne } from './comment-one/comment-one';
import { CommentTwo } from './comment-two/comment-two';

@Component({
  selector: 'app-timeline-center',
  imports: [CommonModule, CommentOne, CommentTwo],
  templateUrl: './timeline-center.html',
  styleUrl: './timeline-center.scss',
})
export class TimelineCenter {}
