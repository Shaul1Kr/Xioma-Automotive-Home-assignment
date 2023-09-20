import { styled } from "styled-components";
import { NativeSelect } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface CustomerComponentProps {
  users: Users[];
  userIndex: number;
  setIndex: Dispatch<SetStateAction<number>>;
}

export default function CustomerComponent({
  users,
  userIndex,
  setIndex,
}: CustomerComponentProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIndex(Number(event.target.value));
  };

  return (
    <CustomerContainer>
      <Customer>Customer</Customer>
      <AvatarContainer>
        <Avatar src={users[userIndex]?.picturePath} alt="Avatar" />
        <p>
          {users[userIndex]?.firstName} {users[userIndex]?.lastName}
        </p>
      </AvatarContainer>
      <InfoContainer>
        <NameContainer>
          <Title>Name</Title>
          <NativeSelect
            value={userIndex}
            inputProps={{
              name: "users",
              id: "uncontrolled-native",
            }}
            onChange={handleChange}
          >
            {users.map((user, index) => (
              <option value={index}>
                {user?.firstName} {user?.lastName}
              </option>
            ))}
          </NativeSelect>
          <Info></Info>
        </NameContainer>
        <IDContainer>
          <Title>ID</Title>
          <Info>{users[userIndex]?.id}</Info>
        </IDContainer>
        <GroupContainer>
          <Title>Group</Title>
          <Info>{users[userIndex]?.group}</Info>
        </GroupContainer>
      </InfoContainer>
    </CustomerContainer>
  );
}

const CustomerContainer = styled.div`
  background-color: white;
  display: grid;
  justify-content: start;
  margin: 2rem;
  text-align: start;
  padding: 1em;
  border-radius: 10px;
  border: grey 1px solid;
`;

const AvatarContainer = styled.div`
  display: flex;
  gap: 1em;
`;

const InfoContainer = styled.div`
  display: flex;
  padding: 0 4rem;
  gap: 14rem;
`;

const NameContainer = styled.div``;

const IDContainer = styled.div`
  border-left: grey 1px solid;
  padding: 0 1rem;
`;

const GroupContainer = styled.div`
  border-left: grey 1px solid;
  padding: 0 1rem;
`;

const Avatar = styled.img`
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Customer = styled.p`
  font-weight: bold;
  font-size: 0.8em;
  text-align: left;
  margin: 0;
`;

const Title = styled.p`
  margin-top: 0;
`;

const Info = styled.p`
  color: rgb(0, 115, 255);
  margin-bottom: 0;
`;
