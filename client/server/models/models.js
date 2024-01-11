const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Token = sequelize.define('token', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    access: {type: DataTypes.TEXT, unique: true},
    refresh: {type: DataTypes.TEXT}
})

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
    name: {type: DataTypes.STRING, unique: false},
})

const Task = sequelize.define('task', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const ActiveTask = sequelize.define('active_task', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId: {type: DataTypes.INTEGER, allowNull: true},
    topic: {type: DataTypes.JSON, allowNull: true},
    message: {type: DataTypes.JSON, allowNull: true},
    status: {type: DataTypes.STRING, defaultValue: 'AT_WORK'}
})


const SliderOne = sequelize.define('slider_one', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: true},
    img: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const News = sequelize.define('news', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    min_description: {type: DataTypes.TEXT, allowNull: true},
    description: {type: DataTypes.TEXT, allowNull: true},
    img: {type: DataTypes.STRING, allowNull: false}
})

const Services = sequelize.define('services', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: true},
    img: {type: DataTypes.STRING, allowNull: false},
    icon: {type: DataTypes.STRING, allowNull: false}
})

const Prices = sequelize.define('prices', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: true},
    price: {type: DataTypes.STRING, allowNull: false}
})

const DocumentsType = sequelize.define('documents_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})
const Documents = sequelize.define('documents', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: true},
    chapter: {type: DataTypes.STRING, allowNull: false},
    file: {type: DataTypes.STRING, allowNull: false}
})

const Technologies = sequelize.define('technologies', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: true},
    img: {type: DataTypes.STRING, allowNull: false}
})

// <---

User.hasOne(Task)
Task.belongsTo(User)

Task.hasMany(ActiveTask)
ActiveTask.belongsTo(Task)

DocumentsType.hasMany(Documents)
Documents.belongsTo(DocumentsType)


// DocumentsType.belongsToMany(DocumentsType, {through: DocumentsType })

module.exports = {
    User,
    Task,
    ActiveTask,
    SliderOne,
    News,
    Services,
    DocumentsType,
    Documents,
    Technologies,
    Prices,
    Token
}