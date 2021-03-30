const express = require('express');
const router = express.Router();


router.get('/', metodoControladorProperties.list)
router.post('/', metodoControladorProperties.store)
router.get('/:id/images', metodoControladorProperties.propiedadConImages)