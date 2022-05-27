var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const noticias = [
    {
      id:1,
      nombre:"Argentina Campeon"
    },
    {
      id:1,
      nombre:"Italia Campeon"
    }
  ]
  res.json(noticias)
});
router.post('/', function(req, res, next) {
  const noticias = [
    {
      id:1,
      nombre:"Argentina Campeon"
    },
    {
      id:1,
      nombre:"Italia Campeon"
    }
  ]
  res.json(noticias)
});
router.get('/portada', function(req, res, next) {
  const noticias = [
    {
      id:1,
      nombre:"Argentina Campeon"
    },
    {
      id:1,
      nombre:"Italia Campeon"
    }
  ]
  res.json(noticias)
});
module.exports = router;
