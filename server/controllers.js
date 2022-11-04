const models = require('./models.js');

module.exports = {
  getProduct: function (req, res) {
    models.getProduct(req.query.id)
    .then((response)=>{
      res.status(200).json(response.rows[0])
    }).catch((err)=>{
      res.sendStatus(404);
    })
  }
}