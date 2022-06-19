const logger = require('pino')();

logger.level = 'trace';

logger.info('info');
logger.error('error');

logger.info('Menasje %d', 400);
logger.info({a: 42}, 'Menasje %d', 400);

const child = logger.child({a: 'property'});

child.info('Hola child');

logger.trace('trace');
logger.debug('debug');
logger.info('info');
logger.warn('warn');
logger.error('error');
logger.fatal('fatal');






