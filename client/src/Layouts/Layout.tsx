import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <StyledContainer>
      <StyledNav />
      <Outlet />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  box-sizing: border-box;
  background-image: url("https://media.istockphoto.com/id/1159531985/photo/close-up-interviewer-interview-candidate-apply-for-job-at-meeting-room-in-office.jpg?b=1&s=612x612&w=0&k=20&c=LNDafJ_witgYnHf7wts9VzPOJKfCwvEz6ZTh2LChLVo=");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.6;
`;

const StyledNav = styled.div`
  width: 100%;
  background-color: rgb(224, 239, 249);
  padding: 1% 0;
  position: absolute;
  z-index: 99999;
`;
