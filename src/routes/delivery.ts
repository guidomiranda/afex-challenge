import express from 'express'

import {getDeliveryEntries} from '../services/api.services';

const router = express.Router()

router.get('/', (_req, res) => {
  res.json({
    success: true,
    message: 'Success'
  });
});

router.get('/deliveries', (_req, res) => {
  res.json(getDeliveryEntries);
});

export default router;