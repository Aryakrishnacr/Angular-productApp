const productdata = require("../model/productdata");

exports.productById = (req, res, next, id) => {
    productdata.findById(id)
    .exec((err, product) => {
      if (err || !product) {
        return res.status(400).json({
          error: "Product not found"
        });
      }
      req.product = product;
      next();
    });
};


exports.create = (req, res) => {
  
      let product = new productdata(req.body);
  console.log(product)
      product.save((err, result) => {
          console.log("result",result)
          console.log("err",err)
        if (err) {
          return res.status(400).json({
            error: errorHandler(err)
          });
        }
        res.json(result);
      });
  };
  

  exports.list = (req, res) => {
  
    productdata.find()
      .exec((err, products) => {
        if (err) {
          return res.status(400).json({
            error: "Products not found"
          });
        }
        res.status(200).json(products);
      });
  };

  exports.remove = (req, res) => {
    let product = req.product;
    product.remove((err, deletedProduct) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        });
      }
      res.json({
        message: "Product deleted successfully"
      });
    });
  };

  exports.update = (req, res) => {

    const product = req.product;
    product.productId = req.body.productId,
    product.productName = req.body.productName,
    product.productCode = req.body.productCode,
    product.releaseDate = req.body.releaseDate,
    product.description = req.body.description,
    product.price = req.body.price,
    product.starRating = req.body.starRating,
    product.imageUrl = req.body.imageUrl
    product.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error:  err
            });
        }
        res.json(data);
    });
};