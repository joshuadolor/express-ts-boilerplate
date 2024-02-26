import express, { type Request, type Response, type Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

const port = process.env.PORT ?? 8000;

app.get('/', (req: Request, res: Response) => {
    res.send('Server running');
});

app.listen(port, () => {
    console.log(`Server: http://localhost:${port}`);
});
