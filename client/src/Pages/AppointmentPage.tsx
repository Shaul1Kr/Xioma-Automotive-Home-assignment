import { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import MeetingsComponent from "../Components/MeetingsComponent";
import DialogComponent from "../Components/DialogComponent";
import NewDialogComponent from "../Components/NewDialogComponent";

export default function AppointmentPage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [newOpen, setNewOpen] = useState<boolean>(false);

  return (
    <Conatiner>
      <DialogComponent setOpen={setOpen} open={open} />
      <NewDialogComponent setOpen={setNewOpen} open={newOpen} />
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
        <DateContainer>
          <p>23/08/23</p>
        </DateContainer>
        <MeetingsComponent setOpen={setOpen} />
        <MeetingsComponent setOpen={setOpen} />
        <MeetingsComponent setOpen={setOpen} />
        <MeetingsComponent setOpen={setOpen} />
        <MeetingsComponent setOpen={setOpen} />
        <MeetingsComponent setOpen={setOpen} />
        <MeetingsComponent setOpen={setOpen} />
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
