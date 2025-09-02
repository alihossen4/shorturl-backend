import 'dotenv/config';

const PORT = process.env.PORT ?? 8000;
const NODE_ENV= process.env.NODE_ENV;
const APP_URL = NODE_ENV=== 'production' ? process.env.APP_URL : 'http://localhost:${PORT}'
const MONGO_URL = process.env.MONGO_URL;
const WHITELISTDOMAIN = process.env.WHITELISTDOMAIN || [];
export { PORT, WHITELISTDOMAIN, MONGO_URL, APP_URL};
