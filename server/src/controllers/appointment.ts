import { Request, Response } from "express";
import User from "../models/User.js";

export async function addAppointment(req: Request, res: Response) {
  try {
    console.info(`Add new appointment`);
    const { date, start, end, users, subject, description } = req.body;
    const user = await User.findById(req.user.id);
    user.meetings.push({
      id: users,
      Date: date,
      start,
      end,
      subject,
      description,
    });

    await user.save();
    return res.status(200).end();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Bad request" });
  }
}
