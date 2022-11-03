const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/productOverview');

const product = new Schema({
  _id: number,
  name: string,
  slogan: string,
  description: string,
  category: string,
  default_price: string,
  features: [feature],
  related_items: [related],
  styles:[style],
});

const feature = new Schema({
  _id: number,
  feature: string,
  value: string,
});

const related = new Schema({
  _id: number
});

const style = new Schema({
  _id: number,
  name: string,
  original_price: string,
  sale_price: string,
  default_style: boolean,
  photos:[photo],
  skus:[sku]
})

const photo = new Schema({
  _id: number,
  url: string,
  thumbnail_url: string
})

const skus = new Schema({
  _id: number,
  quantity: number,
  size: string
})


