const sequelize = require('../config/database');
const { Analysis } = require('../models/analysis');

const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established.');

    await sequelize.sync({ alter: true });
    console.log('Database models synchronized.');
  } catch (error) {
    console.error('Database initialization error:', error);
    process.exit(1);
  }
};

if (require.main === module) {
  initializeDatabase();
}

module.exports = initializeDatabase; 