import 'dotenv/config';
import logger from './logger';
import { app } from './app';

app
	.listen(app.locals['port'], () => {
		logger.debug(`access to http://localhost:${app.locals['port']}`);
	});
