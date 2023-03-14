import { ProductStore } from "./ProductStore";
import { AuthStore } from "./AuthStore";

export interface IRootStore {
  ProductStore: ProductStore;
  AuthStore: AuthStore;
}

export class RootStore implements IRootStore {
  ProductStore: ProductStore;
  AuthStore: AuthStore;

  constructor() {
    this.ProductStore = new ProductStore(this);
    this.AuthStore = new AuthStore(this);
  }
}
