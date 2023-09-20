import { useState } from "react";
import { styled } from "styled-components";
import DialogComponent from "./DialogComponent";

interface MeetingsComponentProps {
  meeting: Meetings;
}

export default function MeetingsComponent({ meeting }: MeetingsComponentProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <DialogComponent setOpen={setOpen} open={open} meeting={meeting} />
      <MeetingsCustomerContainer onClick={() => setOpen((prev) => !prev)}>
        <InfoWrapper>
          <ProfilContainer>
            <Avatar src={meeting.picturePath} alt="Avatar" />
            <P>
              {meeting.firstName} {meeting.lastName}
            </P>
          </ProfilContainer>
          <InfoContainer>
            <Title>{meeting.subject}</Title>
            <SubTitle>Open Waiting For Approval</SubTitle>
          </InfoContainer>
        </InfoWrapper>
        <DateContainer>
          <P>Task Date:</P>
          <P>
            {meeting.Date},{meeting.start}
          </P>
        </DateContainer>
      </MeetingsCustomerContainer>
    </>
  );
}

const MeetingsCustomerContainer = styled.div`
  background-color: white;
  display: flex;
  margin: 0.6rem;
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
