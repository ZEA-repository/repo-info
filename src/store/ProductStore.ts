import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "@/store/RootStore";

export interface Product {
  id: number,
  title: string
  price: string
  category: string
  description: string
  image: string
}

export class ProductStore {
  products: Product[] = [];
  count: number = this.products.length
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      products: observable,
      fetchProducts: action,
      clear: action,
      getProducts: computed,
      quantity: computed,
    });
    this.rootStore = rootStore;
  }

  async fetchProducts() {
    const reponse = await fetch('https://fakestoreapi.com/products')
    this.products = await reponse.json()

  }
  clear = () => {
    this.products = [];
  };

  delete = () => {
    this.products.shift();
  };

  get getProducts() {
    return this.products;
  }

  get quantity() {
    return this.products.length;
  }
}
