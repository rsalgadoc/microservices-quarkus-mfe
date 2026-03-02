import { Component } from '@angular/core';
import { PRODUCTS_CATALOG } from '../../../shared/constants/products.contants';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products = PRODUCTS_CATALOG;
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
