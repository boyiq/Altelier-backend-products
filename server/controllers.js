const models = require('./models.js');

module.exports = {
  getProduct: function (req, res) {
    models.getProductInfo(req.query.id)
      .then((response)=>{
        res.status(200).json(response.rows[0])
      })
      .catch((err)=>{
        res.sendStatus(404);
      })
  },

  getStyles: function (req, res) {
    models.getStyles(req.query.id)
      .then(({ rows })=>{
        if (rows[0]) {
          res.status(200).json(rows[0]);
        } else {
          res.status(200).json(null);
        }
      })
  },


  getRelated: function (req, res) {
    models.getRelated(req.query.id)
      .then(({ rows })=>{
        res.status(200).json(rows[0].array_agg)
      })
      .catch((err)=>{
        res.sendStatus(404);
      })
  }
}