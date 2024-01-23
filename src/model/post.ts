import { DataTypes } from 'sequelize';

export default (sequelize: any) => {
  const Post = sequelize.define(
    'Post',
    {
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      receiverId: { type: DataTypes.BIGINT },
      senderId: { type: DataTypes.BIGINT },
      status: {
        type: DataTypes.STRING(8),
        enum: ['Accepted', 'Delete', 'Pending', 'Blocked'],
      },
    },
    { timestamp: true }
  );
  return Post;
};
