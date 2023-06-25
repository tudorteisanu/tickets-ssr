import { NgClass, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, computed, Input, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  standalone: true,
  imports: [NgClass, NgIf, NgOptimizedImage]
})
export class AccordionItemComponent {
  @Input() title = '';
  @Input() content = '';

  expanded: WritableSignal<boolean> = signal(false);

  headingClass: Signal<string | null> = computed(() => {
    if (this.expanded()) {
      return 'accordion-item__white';
    }

    return null;
  });

  iconClass: Signal<string | null> = computed(() => {
    if (this.expanded()) {
      return 'rotate-chevron';
    }

    return null;
  });

  public toggle(): void {
    this.expanded.update((value: boolean) => !value);
  }
}
