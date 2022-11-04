const models = require('./models.js');

module.exports = {
  getProduct: function (req, res) {
    Promise.all([models.getProductInfo(req.query.id), models.getFeatures(req.query.id)])
    .then((response)=>{
      let product = response[0].rows[0];
      let features = response[1].rows;
      product.features = features;
      res.status(200).json(product)
    }).catch((err)=>{
      res.sendStatus(404);
    })
  }
}