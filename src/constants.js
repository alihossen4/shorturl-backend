import 'dotenv/config';

const PORT = process.env.PORT ?? 8000;

const WHITELISTDOMAIN = process.env.WHITELISTDOMAIN ?? 'http://localhost:8000';
export { PORT, WHITELISTDOMAIN };
