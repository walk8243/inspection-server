import express from 'express';
import { logger } from '@walk8243/logger';

export const app = express();
app.locals['port'] = parseInt(process.env['PORT'] || '3000');

app.use((req, _, next) => {
	logger.debug('*'.repeat(30));
	logger.debug(`${req.method} ${req.url}`);
	logger.debug(`[header] ${JSON.stringify(req.headers)}`);
	if(req.body) logger.debug(`[body] ${JSON.stringify(req.body)}`);
	logger.debug('*'.repeat(30));
	next();
});

app.use((_, res) => {
	res.end('walk8243/inspection-server');
});
