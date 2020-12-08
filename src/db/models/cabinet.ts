import { Model, DataTypes } from "sequelize";
import {myBoxDB} from '../index'

export interface ICabinetAttribute {
    id: number,
    name: string,
    position: string
}

export class Cabinet extends Model implements ICabinetAttribute {
    id: number;
    name: string;
    position: string;
}

Cabinet.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    position: {
        type: DataTypes.STRING,
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at'
    },
    modifiedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'modified_at'
    }
},{
    sequelize: myBoxDB,
    tableName: 'cabinet',
    updatedAt: 'modifiedAt'
})
