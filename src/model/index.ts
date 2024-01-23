import { Sequelize } from 'sequelize';
import user from './user';
import request from './request';
import post from './post';
import likeAndComment from './likeAndComment';

export const sequelize = new Sequelize('instagram', 'postgres', '12345678', {
  host: '127.0.0.1',
  port: 5432,
  dialect: 'postgres',
  logging: (sql) => {
    console.log('sql:', sql);
  },
  timezone: '+05:30',
});

const model = {
  User: user(sequelize),
  Post: post(sequelize),
  Request: request(sequelize),
  LikeAndComment: likeAndComment(sequelize),
};

export { Sequelize, model };
