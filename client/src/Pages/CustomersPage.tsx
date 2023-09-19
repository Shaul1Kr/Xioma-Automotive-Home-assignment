import { styled } from "styled-components";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import CustomerComponent from "../Components/CustomerComponent";
import MeetingsComponent from "../Components/MeetingsComponent";
import { useState } from "react";
import DialogComponent from "../Components/DialogComponent";

export default function CustomersPage() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Conatiner>
      <DialogComponent setOpen={setOpen} open={open} />
      <ChoiceContainer>
        <PeopleOutlineIcon
          sx={{ fontSize: 30, color: "blue", cursor: "pointer" }}
        />
        <CalendarMonthIcon
          sx={{ fontSize: 30, color: "blue", cursor: "pointer" }}
        />
      </ChoiceContainer>
      <CustomersContainer>
        <CustomerComponent />
        <MeetingTitleContainer>
          <MeetingTitle>Meetings</MeetingTitle>
          <MeetingsDvider></MeetingsDvider>
        </MeetingTitleContainer>
        <MeetingsComponent setOpen={setOpen} />
      </CustomersContainer>
    </Conatiner>
  );
}

const Conatiner = styled.div`
  display: flex;
  min-height: 100dvh;
`;

const ChoiceContainer = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2%;
`;

const CustomersContainer = styled.div`
  padding-top: 2%;
  width: 100%;
  background-color: hsl(0, 3.8461538461538316%, 89.80392156862746%);
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

const MeetingTitle = styled.p`
  margin: 0;
`;
