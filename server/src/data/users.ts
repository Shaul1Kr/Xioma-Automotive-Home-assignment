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
      meetings: [
        {
          id: "650a03aa35dd51276aa7af22",
          Date: "15/8/2022",
          start: "13:15",
          end: "17:21",
        },
      ],
    },
    {
      _id: new mongoose.Types.ObjectId(),
      firstName: "Dan",
      lastName: "Israel",
      username: "Dan",
      password: password,
      picturePath:
        "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/102303667_100249058396911_5353699569462408073_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=eN3XnIREVqgAX-BhYx4&_nc_ht=scontent.fhfa2-2.fna&oh=00_AfD4E0k2-fqEiA9SK-saReRb6OlF1M1lkU39HXd6ARKtWA&oe=653215B7",
      id: "111111111",
      group: "Group A",
      meetings: [],
    },
    {
      _id: new mongoose.Types.ObjectId(),
      firstName: "Haim",
      lastName: "Nagar",
      username: "Haim",
      password: password,
      picturePath:
        "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/109338479_100961738368387_8182504213008804360_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3HtiVCrbCm4AX_QsC91&_nc_ht=scontent.fhfa2-2.fna&oh=00_AfChVQKQ0qURVHIrJzaT5Eu1xGGD-_VwsZ3y8H9eIAZvhg&oe=653245E4s",
      id: "22222222",
      group: "Group A",
      meetings: [],
    },
    {
      _id: new mongoose.Types.ObjectId(),
      firstName: "David",
      lastName: "Jeff",
      username: "David",
      password: password,
      picturePath:
        "https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/81511945_491165211507223_8037714085359386624_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=2yXpTJR3qbwAX-5Pv-F&_nc_ht=scontent.fhfa2-2.fna&oh=00_AfAtLzLv9uI2H0r4HPFAmPwcbBfzmeFqPzqsR4gfy18J3w&oe=65322146",
      id: "333333333",
      group: "Group A",
      meetings: [],
    },
    {
      _id: new mongoose.Types.ObjectId(),
      firstName: "Yael",
      lastName: "Cohen",
      username: "Yael",
      password: password,
      picturePath:
        "https://scontent.fhfa2-2.fna.fbcdn.net/v/t39.30808-6/342500521_1710133416073279_8000253025598536467_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=P1ojadX2z7oAX-n19-A&_nc_ht=scontent.fhfa2-2.fna&oh=00_AfATSsb6g3Md83FnULH6q6-74qftgvxD6Idl2QUYGnlxtQ&oe=650EE10A",
      id: "444444444",
      group: "Group A",
      meetings: [],
    },
  ]);
}
