const express = require('express');

const app = express();
const itemRouter = express.Router();

// Require Item model in our routes module
const Item = require('../models/Item');

// Defined store route
itemRouter.route('/add/post').post((req, res) => {
  const item = new Item(req.body);
  item.save()
    // .then((item) => {
    .then((itm) => {
      res.json('Item added successfully');
    })
    .catch((err) => {
      res.status(400).send('unable to save to database');
    });
});

// Defined get data(index or listing) route
itemRouter.route('/').get((req, res) => {
  Item.find((err, itms) => {
    if (err) {
      console.log(err);
    }
    else {
      res.json(itms);
    }
  });
});

// Defined edit route
itemRouter.route('/edit/:id').get((req, res) => {
  // const id = req.params.id;
  const { id } = req.params.id;
  Item.findById(id, (err, item) => {
    res.json(item);
  });
});

//  Defined update route
itemRouter.route('/update/:id').post((req, res) => {
  Item.findById(req.params.id, (err, item) => {
    // if (!item) return next(new Error('Could not load Document'));
    if (!item) return new Error('Could not load Document');
    // do your updates here
    item.item = req.body.item;

    item.save().then((itm) => {
      res.json('Update complete');
    })
      .catch((errr) => {
        res.status(400).send('unable to update the database');
      });
  });
});

// Defined delete | remove | destroy route
itemRouter.route('/delete/:id').get((req, res) => {
  Item.findByIdAndRemove(
    { _id: req.params.id },
    (err, item) => {
      if (err) res.json(err);
      else res.json('Successfully removed');
    }
  );
});

module.exports = itemRouter;
