import { Schema, models, model } from 'mongoose';

const shopppingListSchema = new Schema({
  name: String,
  status: String,
});

const ShoppingList =
  models.shoppingList || model('shoppingList', shopppingListSchema);

export default ShoppingList;
