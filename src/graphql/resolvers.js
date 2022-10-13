import { json } from "express";
import user from "../db/models/user.js";
import dbTest from "../db/pool.js";

const resolvers = {
  Query: {
    feed: async () => await dbTest(),
  },
};

export default resolvers;
