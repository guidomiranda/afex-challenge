import express from 'express';
import router from './routes/delivery'; 

const app = express();
app.use(express.json());
app.use(router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server runnig on port ${PORT}`)
});

