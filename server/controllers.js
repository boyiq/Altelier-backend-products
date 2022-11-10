const models = require('./models.js');

module.exports = {
  getProducts: function (req, res) {
    models.getProducts()
      .then(({ rows })=>{
        res.status(200).json(rows)
      })
      .catch((err)=>{
        console.log('getproducts', err)
        res.sendStatus(404);
      })
  },


  getProduct: function (req, res) {
    models.getProductInfo(req.params.id)
      .then((response)=>{
        res.status(200).json(response.rows[0])
      })
      .catch((err)=>{
        console.log('getproduct', err)
        res.sendStatus(404);
      })
  },

  getStyles: function (req, res) {
    models.getStyles(req.params.id)
      .then(({ rows })=>{
        if (rows[0]) {
          res.status(200).json(rows[0]);
        } else {
          res.status(200).json(null);
        }
      })
      .catch((err)=>{
        console.log('getstyles', err)
        res.sendStatus(404)
      })
  },

  getRelated: function (req, res) {
    models.getRelated(req.params.id)
      .then(({ rows })=>{
        res.status(200).json(rows[0].array_agg)
      })
      .catch((err)=>{
        console.log('getrelated', err)
        res.sendStatus(404);
      })
  }
}