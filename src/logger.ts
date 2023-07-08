import winston from 'winston';

export const logger = winston.createLogger({
	level: process.env['NODE_ENV'] === 'development' ? winston.debug.name : winston.info.name,
	format: winston.format.simple(),
	transports: [
		new winston.transports.Console()
	]
});

export default logger;
