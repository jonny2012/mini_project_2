import { Basket } from "../models/ProductModel";

class BasketService {
  async createBasket(userId, basket) {
    const newBasket = await Basket.create({
      userId,
      basket,
    });
    return newBasket;
  }
  async getAllBaskets() {
    const allBaskets = await Basket.find();
    return allBaskets;
  }
}

export default new BasketService()