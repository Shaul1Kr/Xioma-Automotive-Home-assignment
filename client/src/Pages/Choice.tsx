import { styled } from "styled-components";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

export default function Choice() {
  return (
    <Container>
      <PplContainer>
        <PeopleOutlineIcon sx={{ fontSize: 50, color: "blue" }} />
        <Paragraph>Customers</Paragraph>
      </PplContainer>
      <CalenderContainer>
        <CalendarMonthIcon sx={{ fontSize: 50, color: "blue" }} />
        <Paragraph>Appointments</Paragraph>
      </CalenderContainer>
    </Container>
  );
}

const Container = styled.div`
  margin: auto;
  gap: 5rem;
  display: flex;
`;

const PplContainer = styled.div`
  display: grid;
  justify-items: center;
  cursor: pointer;
`;

const CalenderContainer = styled.div`
  display: grid;
  justify-items: center;
  cursor: pointer;
`;

const Paragraph = styled.p`
  margin: 0;
  color: #0015ff;
  font-size: 1.3em;
`;
