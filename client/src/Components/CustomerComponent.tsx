import { styled } from "styled-components";

export default function CustomerComponent() {
  return (
    <CustomerContainer>
      <Customer>Customer</Customer>
      <AvatarContainer>
        <Avatar
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
        />
        <p>Dan Israel</p>
      </AvatarContainer>
      <InfoContainer>
        <NameContainer>
          <Title>Name</Title>
          <Info>Dan Israel</Info>
        </NameContainer>
        <IDContainer>
          <Title>ID</Title>
          <Info>302155697</Info>
        </IDContainer>
        <GroupContainer>
          <Title>Group</Title>
          <Info>Group A</Info>
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
