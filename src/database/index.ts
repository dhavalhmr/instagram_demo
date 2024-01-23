import { sequelize } from '../model';

export const initializedDatabase = async () => {
  try {
    await sequelize
      .sync({ alter: true, force: true })
      .then((): void => {
        console.log('Connected to Database');
      })
      .catch((err): void => {
        console.log('Database has thrown error', err);
      });
  } catch (error) {
    console.log('Error while initializing Database');
  }
};
