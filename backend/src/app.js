import express from 'express';
import cors from 'cors';
import healthRoutes from './routes/health.routes.js'
import authRoutes from './routes/auth.routes.js'
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'WorkSphere API is running'
  });
});

app.use('/api/health', healthRoutes)
app.use('/api/auth', authRoutes)

export default app;