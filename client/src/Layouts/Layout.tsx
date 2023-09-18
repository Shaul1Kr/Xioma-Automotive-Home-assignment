import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <StyledContainer>
      <Outlet />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  min-height: 100dvh;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-image: url("https://media.istockphoto.com/id/1159531985/photo/close-up-interviewer-interview-candidate-apply-for-job-at-meeting-room-in-office.jpg?b=1&s=612x612&w=0&k=20&c=LNDafJ_witgYnHf7wts9VzPOJKfCwvEz6ZTh2LChLVo=");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.6;
`;
