const { Item } = require('../models');

module.exports = {
  readAll: () => Item,
  readTotal: () => {
    var total = 0;
    Item.map((item) => {
        total += item.quantity;
    });
    return total;
  },
  readAverage: () => {
    var average = 0;
    var sum = 0;
    Item.map((item) => {
        sum += item.price;
    });
    return average = sum / Item.length;
  },
};