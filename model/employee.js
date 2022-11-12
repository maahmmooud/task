
module.exports=(db,type)=>{
    return db.define('employees',{
        id:{
            type:type.INTEGER,
            autoIncrement:true,
            primaryKey: true
        },
        name:{
            type: type.STRING,
            allowNull:false
        },
        email:{
            type: type.STRING,
            allowNull:false,
            unique: true
        },
        phone:{
            type: type.STRING,
            allowNull:false,
            unique: true
        }
    })
}

