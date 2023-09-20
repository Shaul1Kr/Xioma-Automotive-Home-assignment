import { Request, Response } from "express";
import User from "../models/User.js";

export async function getAllCustomers(req: Request, res: Response) {
  try {
    console.info(`Get all users`);
    const users = await User.find();
    return res.status(200).json({ users, userId: req.user.id });
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Bad request" });
  }
}

export async function getAllMeetings(req: Request, res: Response) {
  try {
    const { id } = req.params;
    console.info(`Get all meetings of user id ${id}`);
    const user = await User.findById(id);
    const meetings = await Promise.all(
      user.meetings.map((userMeeting) => {
        const { id, Date, start, end, subject, description } = userMeeting;
        return User.findById(id).then((user) => ({
          _id: id,
          firstName: user.firstName,
          lastName: user.lastName,
          picturePath: user.picturePath,
          subject,
          description,
          Date,
          start,
          end,
        }));
      })
    );
    return res.status(200).json(meetings);
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Bad request" });
  }
}
