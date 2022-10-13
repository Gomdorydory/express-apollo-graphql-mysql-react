import dbTest from "../pool.js";

const tableName = "feed";

const user = {
  selectAll: async () => {
    // const query = `SELECT * FROM ${tableName}`;
    const result = await dbTest(`SELECT * FROM feeds.feed`); //이게 제대로 동작을 안한다.
    //dbTest 인자에 `SELECT * FROM feed`가 들어감.
    return result ? 200 : 400;
  },
};

export default user;
