module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define(`Post`, {
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        modelName: 'Post',
        tableName: 'posts',
        charset: `utf8mb4`,
        collate: `utf8mb4_general_ci`
    });
    Post.associate = (db) => {
        db.Post.belongsTo(db.User)
        db.Post.belongsTo(db.Community)
        db.Post.hasMany(db.Comment)
        db.Post.hasMany(db.Image)
        db.Post.hasOne(db.Limiteduser)
        db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' }) // post.addLikers, post.removeLikers, post.getLikers
        db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
        db.Post.belongsToMany(db.Communitystatus, { through: 'PostClass', as: `Statuses` });

    }

    return Post;
}