const { ItemService } = require('../service');

module.exports = {
    readAll: async (req, res) => {
      try {
        const items = await ItemService.readAll();
        res.status(200).json(items);
      } catch (err) {
        res.status(400).json(err);
      }
    },
    readTotal: async (req, res) => {
        try {
            const total = await ItemService.readTotal();
            res.status(200).json(total);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    readAverage: async (req, res) => {
        try {
            const average = await ItemService.readAverage();
            res.status(200).json(average);
        } catch (err) {
            res.status(400).json(err);
        }
    },
  };