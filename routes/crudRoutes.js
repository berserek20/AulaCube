const express = require('express');
const router = express.Router();
const mongodb = require('mongodb')
const cookies= require('cookie-parser')
const cors = require('cors');
const { docfetch,docCreate,docDelete,update } = require('../controller/crud_controller/crudController');
const app = express()
app.use(cors())
app.use(express.json())
// const {routesCheck}=require('../controller/middleware');
// const { extdocfetch } = require('../controller/extController');

app.use(cookies());
router.get('/', docfetch);

router.put('/', update);

router.post('/', docCreate);

router.delete('/', docDelete);





module.exports = router;