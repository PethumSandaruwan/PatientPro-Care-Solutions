"use server";
import { ID, Query } from "node-appwrite"
import { parseStringify } from "../utils";
import { users } from "../appwrite.config"
import { use } from "react"

export const createUser = async (user: CreateUserParams) => {
    try {
      const newuser = await users.create(
        ID.unique(),
        user.email,
        user.phone,
        undefined,
        user.name
      );
  
      return { ...JSON.parse(JSON.stringify(newuser)), isNewUser: true };
    } catch (error: any) {
      if (error?.code === 409) {
        const existingUser = await users.list([
          Query.equal("email", [user.email]),
        ]);
        return { ...existingUser.users[0], isNewUser: false };
      }
      console.error("An error occurred while creating a new user:", error);
      throw error;
    }
  };
  