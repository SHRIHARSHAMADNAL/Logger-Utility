
type LogLevel = 'debug' | 'info' | 'warn' | 'error';
class Logger {
    private logLevel: LogLevel;
    private logFormatter: (level: LogLevel, message: string) => string = (level, message) => message;

    constructor(logLevel: LogLevel = 'debug') {
        this.logLevel = logLevel;
    }

    public setLogLevel(logLevel: LogLevel) {
        this.logLevel = logLevel;
    }
    private logCondition(level: LogLevel): boolean {
        const levels = {
            'debug': 0,
            'info': 1,
            'warn': 2,
            'error': 3,
        };

        return levels[level] >= levels[this.logLevel];
    }
    public setLogFormatter(formatter: (level: LogLevel, message: string) => string): void {
        this.logFormatter = formatter;
    }
    public log(level: LogLevel, message: string): void {
        if (this.logCondition(level)) {
            const formattedMessage = this.logFormatter(level, message);
            console.log(formattedMessage);
        }
    }
}

const logger = new Logger();
logger.log('debug', "Debugging message.");
logger.log('info', "info message.");
logger.log('warn', "warn message.");
logger.log('error', "error message.");


logger.setLogLevel('info');

logger.log('debug', "Debugging message.");
logger.log('info', "info message.");
logger.log('warn', "warn message.");
logger.log('error', "error message.");

logger.setLogFormatter((level, message) => `[${level.toUpperCase()}] ${message}`);

logger.log('debug', "Debugging message.");
logger.log('info', "info message.");
logger.log('warn', "warn message.");
logger.log('error', "error message.");


