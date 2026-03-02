import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: any[] = [];
  
  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.products = cart;
  }

  getTotalPrice(): number {
    return this.products.reduce((total, product) => total + product.price * product.quantity, 0);
  }

  clearCart(): void {
    localStorage.removeItem('cart');
    this.products = [];
  }
}
