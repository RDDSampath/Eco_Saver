const router = require('express').Router();
const product = require('../models/product');

// add product
router.route("/add").post((req, res) => {

    const title = req.body.title;
    const discription = req.body.discription;
    const price = Number(req.body.price);
    const category = req.body.category;
    const quantity = Number(req.body.quantity);
    const colors = req.body.colors;
    const sizes = req.body.sizes;
    const tumnail_url = req.body.tumnail_url;
    const image_urls = req.body.image_urls;

    const newProduct = new product({
        title,
        discription,
        price,
        category,
        quantity,
        colors,
        sizes,
        tumnail_url,
        image_urls
    })

    newProduct.save().then(() => {
        res.json("Product Added")
    }).catch((err) => {
        console.log(err);
    })

})

// get all products
router.route("/allproducts").get((req, res) => {
    
        product.find().then((products) => {
            res.json(products)
        }).catch((err) => {
            console.log(err);
        })
    
})

// get one product
router.route("/get/:id").get(async (req, res) => {
        
            let productId = req.params.id;
            const foundProduct = await product.findById(productId).then((foundProduct) => {
                res.status(200).send({status: "Product fetched", foundProduct})
            }).catch((err) => {
                console.log(err.message);
                res.status(500).send({status: "Error with get product", error: err.message});
            })
        
})

// update product
router.route("/update/:id").put(async (req, res) => {
    let productId = req.params.id;

    const {title, discription, price, category, quantity, colors, sizes, tumnail_url, image_urls} = req.body;

    const updateProduct = {
        title,
        discription,
        price,
        category,
        quantity,
        colors,
        sizes,
        tumnail_url,
        image_urls
    }
    const update = await product.findByIdAndUpdate(productId, updateProduct).then(() => {
        res.status(200).send({status: "Product updated"})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with updating product", error: err.message});
    })
})

// delete product
router.route("/delete/:id").delete(async (req, res) => {
    let productId = req.params.id;

    await product.findByIdAndDelete(productId).then(() => {
        res.status(200).send({status: "Product deleted"})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting product", error: err.message});
    })
})

module.exports = router;

