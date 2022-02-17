const Sequelize = require('sequelize');
var isDev = false;
var canImpact;



  db = new Sequelize('postgres://ffxhtmgqpykqfh:de29b049b6c7cfdb94152fb5b0bfc3a578eb44d3ddf0c3b6b578fdfa7439d7f9@ec2-44-194-113-156.compute-1.amazonaws.com:5432/d4ikt6nqr4ou1e',{
    host:'ec2-44-194-113-156.compute-1.amazonaws.com',
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false // <<<<<<< YOU NEED THIS
        },
        useUTC: false,
        
      },
     // timezone: '+06:00', // for writing to database
     
    pool: {
        max:10,
        min:0,
        acquire: 30000,
        idle: 10000
    }
    ,//timezone: '+06:00', // for writing to database
})



const sequelize = db;

     sequelize.sync({ alter: canImpact })
       .then(() => {
        console.log(`Database & tables created!`)
       })

  module.exports  = sequelize;