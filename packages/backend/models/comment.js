module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define(`Comment`, {
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        }

    }, {
        modelName: 'Comment',
        tableName: 'comments',
        charset: `utf8mb4`,
        collate: `utf8mb4_general_ci`
    });
    Comment.associate = (db) => {
        db.Comment.belongsTo(db.User)
        db.Comment.belongsTo(db.Post)
        db.Comment.belongsToMany(db.Comment, {through: `Ref`, as: `Refs`})
    }

    return Comment;
}