import { Request, Response } from "express";
import UserRepository from "../repository/userCollection";
import { User } from "entities/user";

class UserController {
  static async getAllUsers(req: Request, res: Response): Promise<any> {
    try {
      const query = req.query;
      const users: User[] = await UserRepository.fetchAllUsers();
  
      if (!users || users.length === 0) {
         return res.status(404).json({ message: "No users found" });
      }
  
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  }

  static async updateUser(req: Request, res: Response): Promise<any> {
    try {
      const userData: User = req.body;
      const responseUpdate = await UserRepository.updateUserData(userData.id, userData);
      if (!responseUpdate) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json(responseUpdate);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  }

  static async getUserData(req: Request, res: Response): Promise<any> {
    const userId = req.params.userId;
    const user: User | null = await UserRepository.fetchUserData(userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  }

  static async createNewUser(req: Request, res: Response): Promise<any> {
    const {
      name,
      email,
      totalAverageWeightRatings,
      numberOfRents,
      recentlyActive,
    } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newUser = {
      name,
      email,
      totalAverageWeightRatings: totalAverageWeightRatings || 0,
      numberOfRents: numberOfRents || 0,
      recentlyActive: recentlyActive || Date.now(),
    };

    const result = await UserRepository.createUser(newUser);
    res
      .status(201)
      .json({
        message: "User created successfully",
        userId: result.userId,
        user: newUser,
      });
  }
}

export default UserController