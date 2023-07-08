import winston from 'winston';

export const logger = winston.createLogger({
	level: winston.debug.name,
	format: winston.format.simple(),
	transports: [
		new winston.transports.Console()
	]
});
