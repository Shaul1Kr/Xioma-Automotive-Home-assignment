import { useState } from "react";
import { styled } from "styled-components";
import { useLoaderData, useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import MeetingsComponent from "../Components/MeetingsComponent";
import NewDialogComponent from "../Components/NewDialogComponent";
import axios from "axios";
import useMeetings from "../hooks/useMeetings";

export async function loader() {
  const response = await axios.get(
    "http://localhost:3000/api/customers/getCustomers",
    { withCredentials: true }
  );
  return response.data;
}

export default function AppointmentPage() {
  const navigate = useNavigate();
  const [newOpen, setNewOpen] = useState<boolean>(false);
  const { users, userId } = useLoaderData() as Users;
  const meetings = useMeetings({ id: userId });

  return (
    <Conatiner>
      <NewDialogComponent setOpen={setNewOpen} open={newOpen} users={users} />
      <ChoiceContainer>
        <PeopleOutlineIcon
          sx={{ fontSize: 30, color: "blue", cursor: "pointer" }}
          onClick={() => navigate("/customers")}
        />
        <CalendarMonthIcon
          sx={{ fontSize: 30, color: "blue", cursor: "pointer" }}
          onClick={() => navigate("/appointment")}
        />
      </ChoiceContainer>
      <CustomersContainer>
        <DateContainer></DateContainer>
        {meetings.map((meeting) => (
          <MeetingsComponent meeting={meeting} />
        ))}
        <IconWrapper>
          <AddIcon
            sx={{ fontSize: 50, color: "blue", cursor: "pointer " }}
            onClick={() => setNewOpen((prev) => !prev)}
          />
        </IconWrapper>
      </CustomersContainer>
    </Conatiner>
  );
}

const Conatiner = styled.div`
  display: flex;
  height: 100vh;
`;

const DateContainer = styled.div``;

const ChoiceContainer = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2%;
`;

const CustomersContainer = styled.div`
  display: flex;
  padding-top: 2%;
  width: 100%;
  background-color: hsl(0, 3.8461538461538316%, 89.80392156862746%);
  flex-direction: column;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: end;
  padding: 1rem;
`;
