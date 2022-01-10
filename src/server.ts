import { logger } from '@walk8243/logger';
import { app } from './app';

app
	.listen(app.locals['port'], () => {
		logger.debug(`access to http://localhost:${app.locals['port']}`);
	});
