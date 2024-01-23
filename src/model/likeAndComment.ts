import { DataTypes } from 'sequelize';

export default (sequelize: any) => {
  const likeAndComment = sequelize.define('LikeAndComment', {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    postId: { type: DataTypes.BIGINT },
    userId: { type: DataTypes.BIGINT },
    comment: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  });
  return likeAndComment;
};

// get() {
//   return JSON.parse(this.getDataValue('comment'));
// },
// set(value: any) {
//   return this.setDataValue('comment', JSON.stringify(value));
// },

// get: function() {
//     return JSON.parse(this.getDataValue('myArrayField'));
// },
// set: function(val) {
//     return this.setDataValue('myArrayField', JSON.stringify(val));
