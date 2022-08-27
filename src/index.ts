import express from 'express';
import cors from 'cors';
import router from './routes/delivery'; 

const app = express();
app.use(express.json());
app.use(express.json({ limit: '200mb' }));
app.use(
  express.urlencoded({
    limit: '200mb',
    extended: true,
  })
);

app.use(
  cors({
    methods: ['OPTIONS', 'GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    maxAge: 3600,
    preflightContinue: false,
  })
);

app.use(router);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server runnig on port ${PORT}`)
});

