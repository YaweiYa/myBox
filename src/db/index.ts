import {Sequelize} from 'sequelize'

export const myBoxDB = new Sequelize({
    dialect: 'postgres',
    database: 'myBox',
    username: 'postgres',
    password: 'password10'
})
