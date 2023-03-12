import { ProductStore } from "./ProductStore";

export interface IRootStore {
  ProductStore: ProductStore;
}

export class RootStore implements IRootStore {
  ProductStore: ProductStore;

  constructor() {
    this.ProductStore = new ProductStore(this);
  }
}
