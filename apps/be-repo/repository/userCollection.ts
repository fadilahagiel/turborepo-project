import { User } from "entities/user";
import { db } from "../config/firebaseConfig";

const USERS_COLLECTION = "USERS";

class UserRepository {
  static async fetchUserData(userId: string): Promise<User | null> {
    const userRef = db.collection(USERS_COLLECTION).doc(userId);
    const doc = await userRef.get();
    
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as User;
  }

  static async fetchAllUsers(): Promise<User[]> {
    const snapshot = await db.collection(USERS_COLLECTION)
    .orderBy("totalAverageWeightRatings", "desc")
    .orderBy("numberOfRents", "desc")
    .orderBy("recentlyActive", "desc")
    .get();
    return snapshot.docs.map((doc) => {
      const data = doc.data() as User;
      const { id, ...userData } = data;
      return { id: doc.id, ...userData };
    });
  }

  static async updateUserData(userId: string, data: any) {
    await db.collection(USERS_COLLECTION).doc(userId).update(data);
    return { success: true };
  }

  static async createUser(data: any) {
    const userRef = await db.collection(USERS_COLLECTION).add(data);
    return {
      success: true,
      message: "User created successfully",
      userId: userRef.id,
    };
  }
}

export default UserRepository
