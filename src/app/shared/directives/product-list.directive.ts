import { Directive, HostBinding, HostListener, input, output, signal } from '@angular/core';

import { productListInterface } from '../data/ecommerce/product-list';

export type SortColumn = keyof productListInterface | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { asc: 'desc', desc: '', '': 'asc' };

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}
@Directive({
  standalone: true,
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()',
  },
})
export class ProductListDirective {
  readonly sortable = input<SortColumn>('');
  readonly direction = input<SortDirection>('');

  public currentDirection = signal<SortDirection>(this.direction());

  readonly sort = output<SortEvent>();

  @HostBinding('class.asc') get isAsc() {
    return this.currentDirection() === 'asc';
  }
  @HostBinding('class.desc') get isDesc() {
    return this.currentDirection() === 'desc';
  }

  @HostListener('click')
  rotateColumn() {
    this.currentDirection.set(rotate[this.currentDirection()]);
    this.sort.emit({ column: this.sortable(), direction: this.currentDirection() });
  }
}
