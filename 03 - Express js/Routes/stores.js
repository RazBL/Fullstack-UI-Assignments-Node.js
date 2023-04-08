const express = require('express');
const DATA = require('../db/stores.json');
const StoresRouter = express.Router();

StoresRouter.get('/store', async (req, res) => {
    res.status(200).json(DATA);
})

StoresRouter.get('/store/add', async (req, res) => {

    let store = {
        id: "055f71c7",
        name: "Super Pharm",
        city: "Ashkelon",
        products: [{
                id: "1",
                name: "Toilet paper",
                price: 39,
                sale: 28
            },
            {
                id: "2",
                name: "Deodorant",
                price: 34,
                sale: 26
            },
            {
                id: "3",
                name: "Face wash",
                price: 30,
                sale: 26
            }
        ]
    }

    DATA.push(store);
    res.status(200).json(DATA);
});

StoresRouter.get('/store/:id', async (req, res) => {
    let {
        id
    } = req.params;

    let store = DATA.find((s) => s.id === id);

    if (store) {
        res.status(200).json(store);
    } else {
        res.status(400).json({
            msg: "Store not found"
        });
    }
});


StoresRouter.get('/stores/:store/:item', async (req, res) => {
    let productName = req.params.item;
    let storeName = req.params.store;

    let store = DATA.find((s) => s.name == storeName);

    if (store) {
        let product = store.products.find((p) => p.name == productName);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(400).json({
                msg: "Product not found"
            });
        }
    } else {
        res.status(400).json({
            msg: "Store not found"
        });
    }
});


StoresRouter.get('/store/:store/items/add', async (req, res) => {
    let{
        store
    } = req.params;


    let s = DATA.find((s) => s.name == store);
    if (s) {
        let product = {id: 4, name: "Pizza", price: 40, sale: 37}
        s.products.push(product);
        res.status(200).json(s);
    } else {
        res.status(400).json({
            msg: "Store not found"
        });
    }
});






module.exports = StoresRouter;