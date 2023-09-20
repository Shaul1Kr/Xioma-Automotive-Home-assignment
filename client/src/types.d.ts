type Users = {
  firstName: string;
  lastName: string;
  picturePath: string;
  id: string;
  group: string;
  meetings: Array<object>;
  _id: string;
  users: Array<Users>;
  userId: string;
};

type Meetings = {
  firstName: string;
  lastName: string;
  picturePath: string;
  Date: string;
  start: string;
  end: string;
  subject: string;
  discription: string;
};
