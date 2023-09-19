import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

export default function Choice() {
  const navigate = useNavigate();
  return (
    <Container>
      <PplContainer>
        <PeopleOutlineIcon
          sx={{ fontSize: 50, color: "blue" }}
          onClick={() => navigate("/customers")}
        />
        <Paragraph>Customers</Paragraph>
      </PplContainer>
      <CalenderContainer>
        <CalendarMonthIcon
          sx={{ fontSize: 50, color: "blue" }}
          onClick={() => navigate("/appointment")}
        />
        <Paragraph>Appointments</Paragraph>
      </CalenderContainer>
    </Container>
  );
}

const Container = styled.div`
  gap: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
