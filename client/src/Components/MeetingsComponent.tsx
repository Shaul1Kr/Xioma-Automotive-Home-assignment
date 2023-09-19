import { Dispatch, SetStateAction } from "react";
import { styled } from "styled-components";

interface MeetingsComponentProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MeetingsComponent({ setOpen }: MeetingsComponentProps) {
  return (
    <MeetingsCustomerContainer onClick={() => setOpen((prev) => !prev)}>
      <InfoWrapper>
        <ProfilContainer>
          <Avatar
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Avatar"
          />
          <P>Haim Nagar</P>
        </ProfilContainer>
        <InfoContainer>
          <Title>Details Of Treatments</Title>
          <SubTitle>Open Waiting For Approval</SubTitle>
        </InfoContainer>
      </InfoWrapper>
      <DateContainer>
        <P>Task Date:</P>
        <P>25/08/2022, 7:00</P>
      </DateContainer>
    </MeetingsCustomerContainer>
  );
}

const MeetingsCustomerContainer = styled.div`
  background-color: white;
  display: flex;
  margin: 2rem;
  padding: 1em;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  border-radius: 10px;
  cursor: pointer;
`;

const ProfilContainer = styled.div``;

const InfoContainer = styled.div``;

const DateContainer = styled.div`
  display: flex;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Avatar = styled.img`
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Title = styled.p`
  margin: 0;
`;

const SubTitle = styled.p`
  margin: 0;
`;

const P = styled.p`
  margin: 0;
`;
