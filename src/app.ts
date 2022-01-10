import express from 'express';
import cookieParser from 'cookie-parser';
import favicon from 'serve-favicon';
import path from 'path';
import { logger } from '@walk8243/logger';

export const app = express();
app.locals['port'] = parseInt(process.env['PORT'] || '3000');

app
	.use(express.json())
	.use(express.urlencoded({ extended: false }))
	.use(cookieParser())
	.use(favicon(path.resolve(__dirname, '../favicon.ico')));

app.use((req, _, next) => {
	logger.debug('*'.repeat(30));
	logger.debug(`${req.method} ${req.path}`);
	logger.debug(`[header] ${JSON.stringify(req.headers)}`);
	logger.debug(`[query] ${JSON.stringify(req.query)}`);
	logger.debug(`[body] ${JSON.stringify(req.body)}`);
	logger.debug('*'.repeat(30));
	next();
});

app.use((_, res) => {
	res.end('walk8243/inspection-server');
});
