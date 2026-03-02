import { Component } from '@angular/core';
import { PRODUCTS_CATALOG } from '../../../shared/constants/products.contants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  featuredProducts = PRODUCTS_CATALOG.slice(0, 2);
  dialogMessage: string = '';

  addToCart(product: any): void {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const productIndex = cart.findIndex((item: any) => item.id === product.id);
    if (productIndex === -1) {
      cart.push({ ...product, quantity: 1 });
    } else {
      cart[productIndex].quantity += 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));

    this.dialogMessage = `${product.name} añadido a la cesta.`;
    const dialog = document.querySelector('dialog');
    dialog?.showModal();
  }

  closeDialog(dialog: HTMLDialogElement): void {
    dialog.close();
  }
}
