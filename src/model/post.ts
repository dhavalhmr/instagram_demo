import { DataTypes } from 'sequelize';

export default (sequelize: any) => {
  const Post = sequelize.define(
    'Post',
    {
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      description: { type: DataTypes.STRING },
      imageString: { type: DataTypes.STRING },
    },
    { timestamp: true }
  );
  return Post;
};
