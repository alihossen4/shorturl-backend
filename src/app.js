import e from 'express';
import cors from 'cors';
import { WHITELISTDOMAIN } from './constants.js';
import cookieParser from 'cookie-parser';
const app = e();

app.use(e.json());
app.use(e.urlencoded({ extended: true }));
app.use(e.static('public'));
app.use(
  cors({
    origin: WHITELISTDOMAIN,
    credentials: true,
  })
);
app.use(cookieParser());
import urlRoute from './routes/url.route.js';

app.use("/api", urlRoute);
// app.use(errorHandler);
export {app};
