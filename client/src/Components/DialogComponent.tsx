import { Dispatch, SetStateAction } from "react";
import { styled } from "styled-components";

interface DialogComponentProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  meeting: Meetings;
}

export default function DialogComponent({
  setOpen,
  open,
  meeting,
}: DialogComponentProps) {
  return (
    <Dialog open={open}>
      <Conatiner>
        <ProfilContainer>
          <Avatar src={meeting.picturePath} alt="Avatar" />
          <P>
            {meeting.firstName} {meeting.lastName}
          </P>
        </ProfilContainer>
        <InfoContainer>
          <SubjectContainer>
            <P>Subject</P>
            <Detail>{meeting.subject}</Detail>
          </SubjectContainer>
          <DateAndTimeConatainer>
            <DateAndTimeSubjects>
              <P>Date</P>
              <P>Tiem to Time</P>
            </DateAndTimeSubjects>
            <DateAndTimeInfo>
              <Detail>{meeting.Date}</Detail>
              <Time>
                <Detail>{meeting.start}</Detail>
                <Detail>{meeting.end}</Detail>
              </Time>
            </DateAndTimeInfo>
          </DateAndTimeConatainer>
          <CustomerContainer>
            <P>Customer</P>
            <Detail>
              {meeting.firstName} {meeting.lastName}
            </Detail>
          </CustomerContainer>
          <DescriptionContainer>
            <P>Description</P>
            <Textarea rows={15} value={meeting.discription} />
          </DescriptionContainer>
        </InfoContainer>
        <SubmitContainer>
          <Submit onClick={() => setOpen(false)}>Done</Submit>
        </SubmitContainer>
      </Conatiner>
    </Dialog>
  );
}

const Dialog = styled.dialog`
  top: 50%;
  width: 25%;
  transform: translate(0, -50%);
  padding: 1em 3em 1em 1em;
`;

const Conatiner = styled.div`
  display: grid;
  justify-items: start;
`;

const InfoContainer = styled.div`
  display: grid;
  width: 100%;
  margin: 1rem;
`;

const ProfilContainer = styled.div`
  display: flex;
`;
const SubjectContainer = styled.div`
  display: grid;
  justify-items: start;
  margin: 1rem 0;
  border-bottom: grey 1px solid;
  width: 100%;
`;
const DateAndTimeConatainer = styled.div`
  display: grid;
  margin: 1rem 0;
  border-bottom: grey 1px solid;
  width: 100%;
`;
const DateAndTimeSubjects = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const DateAndTimeInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Time = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const CustomerContainer = styled.div`
  display: grid;
  justify-items: start;
  border-bottom: grey 1px solid;
`;

const DescriptionContainer = styled.div`
  display: grid;
  justify-items: start;
  margin: 1rem 0;
`;

const SubmitContainer = styled.div`
  display: grid;
  width: 100%;
  margin-left: 1.2rem;
`;

const Avatar = styled.img`
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Submit = styled.button`
  background-color: #0d5285;
  color: #fff7ed;
`;

const P = styled.p`
  margin: 0;
`;

const Detail = styled.p`
  margin: 0;
  color: rgb(52, 110, 255);
`;

const Textarea = styled.textarea`
  width: 100%;
  resize: none;
`;
