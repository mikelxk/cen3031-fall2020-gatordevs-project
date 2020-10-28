import { init } from './config/express.js';
// Use env port or default
const port = process.env.PORT || 5000;

const app = init()
app.listen(port, () => console.log(`Server now running on port ${port}!`));