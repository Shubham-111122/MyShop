import { Component } from '@angular/core';
import { SharedService } from '../../shared-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  currentIndex = 0;

  products = [
    {
      id: 1,
      title: 'iPhone 9',
      thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
    },
    {
      id: 2,
      title: 'iPhone X',
      thumbnail: 'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg',
    },
    {
      id: 3,
      title: 'Samsung Universe 9',
      thumbnail: 'https://cdn.dummyjson.com/product-images/3/thumbnail.jpg',
    },
    {
      id: 4,
      title: 'OPPOF19',
      thumbnail: 'https://cdn.dummyjson.com/product-images/4/thumbnail.jpg',
    },
    {
      id: 5,
      title: 'Huawei P30',
      thumbnail: 'https://cdn.dummyjson.com/product-images/5/thumbnail.jpg',
    },
  ];

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.products.length - 1;
    }
  }

  nextSlide() {
    if (this.currentIndex < this.products.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }
}
