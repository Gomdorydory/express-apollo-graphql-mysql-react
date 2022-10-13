//resolver에서 DB연결합니다.
import mysql from "mysql2";
//이렇게 하는 곳도 있고
// const mysql = require("mysql2"); //이렇게 하는 곳도 있네;;

//방법 1 getConnection > query > release 수행
// pool.getConnection(function (err, conn) {
//   if (err) throw err;
//   else {
//     conn.query("SELECT * FROM feed", function (err, results) {
//       if (err) throw err;
//       else console.log(results);
//       getresult == results;
//     });
//     conn.release();
//   }
// });

//방법 2 promise를 사용하기
// pool 생성, connection, 데이터받아오기, connection 종료 과정을 반복하기 싫어서 함수로 정의
import pool from "./config.js";

const dbTest = async () => {
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      const [rows] = await connection.query(`SELECT * FROM feed`);
      connection.release();
      console.log(rows);
      return rows;
      // 배열로 반환 받는 이유는 mysql2/promise 라이브러리에서 쿼리 결과를 반환 받을 때 저렇게 반환 받게 되어있기 때문에 저렇게 작성한다. [rows, fields] 로 선언 시 fields에 대한 정보도 같이 반환 받을 수 있다. error catch의 경우는 try, catch 로 감싸서 처리해준다면 더욱 좋은 코드가 될 것이다.
    } catch (err) {
      console.log("Query Error");
      connection.release();
      return false;
    }
  } catch (err) {
    console.log("DB Error");
    return false;
  }
};

// const pool = {
//   query: async (query, value) => {
//     let result;
//     const pool = await poolPromise;
//     try {
//       var connection = await pool.getConnection();
//       result = value
//         ? await connection.query(query, value)
//         : (await connection.query(query)) || null;
//     } catch (err) {
//       console.log(err);
//       connection.rollback(() => {});
//     } finally {
//       console.log("접속성공");
//       pool.releaseConnection(connection);
//       return result;
//     }
//   },
// };

export default dbTest;

// async findById(id : string) {
//   try {
//     const promiseresults = await promisePool.query('SELECT * FROM student WHERE id = ?;', [id]);
//     return result;
//   } catch (err) {
//     return err;
//   }
// };
