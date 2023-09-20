import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import CustomerComponent from "../Components/CustomerComponent";
import MeetingsComponent from "../Components/MeetingsComponent";
import axios from "axios";
import { useState } from "react";
import useMeetings from "../hooks/useMeetings";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const response = await axios.get(
    "http://localhost:3000/api/customers/getCustomers",
    { withCredentials: true }
  );
  const users = response.data.users;
  return users;
}

export default function CustomersPage() {
  const navigate = useNavigate();
  const users = useLoaderData() as Users[];
  const [index, setIndex] = useState<number>(0);
  const meetings = useMeetings({ id: users[index]?._id });

  return (
    <Conatiner>
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
        <CustomerComponent users={users} index={index} setIndex={setIndex} />
        <MeetingTitleContainer>
          <MeetingTitle>Meetings</MeetingTitle>
          <MeetingsDvider></MeetingsDvider>
        </MeetingTitleContainer>
        <MeetingWrapper>
          {meetings.map((meeting) => (
            <MeetingsComponent meeting={meeting} />
          ))}
        </MeetingWrapper>
      </CustomersContainer>
    </Conatiner>
  );
}

const Conatiner = styled.div`
  display: flex;
`;

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
  box-sizing: border-box;
  height: 100vh;
`;

const MeetingTitleContainer = styled.div`
  margin: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MeetingsDvider = styled.div`
  border-top: grey 1px solid;
  height: 0;
  width: 100%;
`;

const MeetingWrapper = styled.div`
  overflow-y: auto;
  flex: 1;
`;

const MeetingTitle = styled.p`
  margin: 0;
`;
