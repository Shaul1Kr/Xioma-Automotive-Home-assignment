import { NativeSelect } from "@mui/material";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { styled } from "styled-components";

interface NewDialogComponentProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  users: Users[];
}

export default function NewDialogComponent({
  setOpen,
  open,
  users,
}: NewDialogComponentProps) {
  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    //Get all target and convert then in an object
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    data.id = users[0]._id;
    data.users = users[data.users]._id;
    setOpen(false);
    await axios.post(
      "http://localhost:3000/api/appointment/addNewAppointment",
      data
    );
  };
  return (
    <Dialog open={open}>
      <StyledForm onSubmit={handleSubmit}>
        <Conatiner>
          <ProfilContainer>
            <Avatar
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Avatar"
            />
            <P>New Appointment</P>
          </ProfilContainer>
          <InfoContainer>
            <SubjectContainer>
              <P>Subject</P>
              <InputStyle type="text" name="subject" required />
              <Detail></Detail>
            </SubjectContainer>
            <DateAndTimeConatainer>
              <DateAndTimeSubjects>
                <P>Date</P>
                <P>Time to Time</P>
              </DateAndTimeSubjects>
              <DateAndTimeInfo>
                <Detail>
                  <InputStyle type="date" name="date" required />
                </Detail>
                <Time>
                  <Detail>
                    <InputStyle type="time" name="start" required />
                  </Detail>
                  <Detail>
                    <InputStyle type="time" name="end" required />
                  </Detail>
                </Time>
              </DateAndTimeInfo>
            </DateAndTimeConatainer>
            <CustomerContainer>
              <P>Customer</P>
              <Detail>
                <NativeSelect
                  required
                  inputProps={{
                    name: "users",
                    id: "uncontrolled-native",
                  }}
                >
                  {users.map((user, index) => (
                    <option value={index}>
                      {user?.firstName} {user?.lastName}
                    </option>
                  ))}
                </NativeSelect>
              </Detail>
            </CustomerContainer>
            <DescriptionContainer>
              <P>Description</P>
              <Textarea rows={5} name="description" />
            </DescriptionContainer>
          </InfoContainer>
          <SubmitContainer>
            <Submit type="submit" value="Submit">
              Done
            </Submit>
          </SubmitContainer>
        </Conatiner>
      </StyledForm>
    </Dialog>
  );
}

const Dialog = styled.dialog`
  top: 50%;
  transform: translate(0, -50%);
  padding: 1em 3em 1em 1em;
`;

const Conatiner = styled.div`
  display: grid;
  justify-items: start;
`;

const StyledForm = styled.form`
  display: grid;
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

const InputStyle = styled.input`
  border: none;
  outline: none;
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
