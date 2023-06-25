import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements AfterViewInit {
  @ViewChild('loader') loaderRef!: ElementRef;

  @Input() size = 20;

  ngAfterViewInit(): void {
    this.loaderRef.nativeElement.style.width = `${this.size}px`;
    this.loaderRef.nativeElement.style.height = `${this.size}px`;
  }
}
