import express from 'express';
import routerEvents from './routers/events.router.js';

//configure Express.js app
const app = express();

//middleware
app.use(express.json());

//routers
app.use('/api/events', routerEvents);

export default app;