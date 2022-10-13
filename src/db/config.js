import mysql from "mysql2/promise";

const dbConfig = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "dory",
  database: "feeds",
  multipleStatements: true, // allows to use multiple statements
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

export default mysql.createPool(dbConfig);

//DB 연결은 제대로 됨.
