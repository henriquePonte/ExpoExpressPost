
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();


/**
 * Sequelize instance for connecting to the PostgreSQL database.
 * @type {Sequelize}
 */
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
});

/**
 * Connects to the database and checks if the connection is successful.
 * @async
 * @function connectDatabase
 * @returns {Promise<void>}
 * @throws {Error} If the connection fails.
 */
const connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Successfully connected to the database!');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1);
    }
};

export { sequelize, connectDatabase };
