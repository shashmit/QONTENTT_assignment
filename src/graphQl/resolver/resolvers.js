import { User } from "../../model/schema.js";

const resolver = {
  Query: {
    async users() {
      return await User.find();
    },
    async user(_, { ID }) {
      return await User.findById(ID);
    },
  },
  Mutation: {
    async createUser(_, { userInput }) {
      const createdUser = new User({
        name: userInput.name,
        age: userInput.age,
        email: userInput.email,
      });
      const res = await createdUser.save();
      return {
        id: res._id,
        ...res._doc,
      };
    },
    async deleteUser(_, { ID }) {
      const wasDeleted = (await User.deleteOne({ _id: ID })).deletedCount;
      return wasDeleted;
    },
  },
};

export default resolver;
