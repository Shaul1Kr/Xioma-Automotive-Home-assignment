import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcrypt";

export default async function data() {
  // Insert first users
  const salt = await bcrypt.genSalt();
  const password = await bcrypt.hash("1234", salt);
  User.insertMany([
    {
      _id: new mongoose.Types.ObjectId(),
      firstName: "Shauli",
      lastName: "Kraus",
      username: "shauli",
      password: password,
      picturePath:
        "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/67382387_10219663566444127_7103768468977090560_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0GEnpNHfv1wAX-WCtKx&_nc_ht=scontent.fhfa2-2.fna&oh=00_AfDHtAUL4e76gZVN1sGIWF-EVGGUMmd-1rfmr_Jg_Ig1Lg&oe=65314357",
      id: "123456789",
      group: "Group A",
    },
    {
      _id: new mongoose.Types.ObjectId(),
      firstName: "Dan",
      lastName: "Israel",
      username: "Dan",
      password: password,
      picturePath:
        "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/67382387_10219663566444127_7103768468977090560_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0GEnpNHfv1wAX-WCtKx&_nc_ht=scontent.fhfa2-2.fna&oh=00_AfDHtAUL4e76gZVN1sGIWF-EVGGUMmd-1rfmr_Jg_Ig1Lg&oe=65314357",
      id: "111111111",
      group: "Group A",
    },
    {
      _id: new mongoose.Types.ObjectId(),
      firstName: "Haim",
      lastName: "Nagar",
      username: "Haim",
      password: password,
      picturePath:
        "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/67382387_10219663566444127_7103768468977090560_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0GEnpNHfv1wAX-WCtKx&_nc_ht=scontent.fhfa2-2.fna&oh=00_AfDHtAUL4e76gZVN1sGIWF-EVGGUMmd-1rfmr_Jg_Ig1Lg&oe=65314357",
      id: "22222222",
      group: "Group A",
    },
    {
      _id: new mongoose.Types.ObjectId(),
      firstName: "David",
      lastName: "Jeff",
      username: "David",
      password: password,
      picturePath:
        "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/67382387_10219663566444127_7103768468977090560_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0GEnpNHfv1wAX-WCtKx&_nc_ht=scontent.fhfa2-2.fna&oh=00_AfDHtAUL4e76gZVN1sGIWF-EVGGUMmd-1rfmr_Jg_Ig1Lg&oe=65314357",
      id: "333333333",
      group: "Group A",
    },
    {
      _id: new mongoose.Types.ObjectId(),
      firstName: "Yael",
      lastName: "Cohen",
      username: "Yael",
      password: password,
      picturePath:
        "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/67382387_10219663566444127_7103768468977090560_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0GEnpNHfv1wAX-WCtKx&_nc_ht=scontent.fhfa2-2.fna&oh=00_AfDHtAUL4e76gZVN1sGIWF-EVGGUMmd-1rfmr_Jg_Ig1Lg&oe=65314357",
      id: "444444444",
      group: "Group A",
    },
  ]);
}
