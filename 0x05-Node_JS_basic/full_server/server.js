import express from 'express';
import routes from './routes';

const app = express();

// Use the routes defined in routes
app.use('/', routes);

const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
