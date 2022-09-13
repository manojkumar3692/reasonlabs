import React, { useState } from "react";
import styled from "styled-components";
import { UserState } from "../context/context";

type Props = {};
const DEFAULT_USERINFO = {
  id : Date.now(),
  firstname: "",
  lastname: "",
  phone: "",
}
export default function Home({}: Props) {
  const {
    userState: { users },
    userDispatch,
  }: any = UserState();
  const [userInfo, setUserInfo] = useState(DEFAULT_USERINFO);

  const handleOnChange = (e: any) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value, id: Date.now() });
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    let validation = users.some((user: any) => user.firstname === userInfo.firstname );
    if(validation) {
      alert('First name already available');
      return
    }
    if(userInfo.phone.length !== 10) {
      alert('Must be 10 numbers only');
      return
    }
    userDispatch({
      type: "ADD_USER",
      payload: userInfo,
    });
  };

  const deleteUser = (user:any) => {
        let updateArr = users.filter((each:any) => each.id !== user.id)
        userDispatch({
            type: 'DELETE_USER',
            payload: updateArr
        })
  }
  return (
    <HomeContainer>
      <UserContainer>
        <form onSubmit={onSubmit}>
          <UserInfo>
            <label>First Name:</label>
            <input
              name="firstname"
              type="text"
              placeholder="name"
              onChange={(e) => handleOnChange(e)}
            ></input>
          </UserInfo>
          <UserInfo>
            <label>Last Name:</label>
            <input
              name="lastname"
              type="text"
              placeholder="lastname"
              onChange={(e) => handleOnChange(e)}
            ></input>
          </UserInfo>
          <UserInfo>
            <label>Phone:</label>
            <input
              name="phone"
              type="number"
              placeholder="phone"
              onChange={(e) => handleOnChange(e)}
            ></input>
          </UserInfo>
          <UserInfo>
            <button>Submit</button>
          </UserInfo>
        </form>
      </UserContainer>
      <TableContainer>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user:any, index:number) => {
            return (
              <tr key={index}>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.phone}</td>
                <td>
                    <button onClick={() => deleteUser(user)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </TableContainer>
    </HomeContainer>
  );
}

export const HomeContainer = styled.div`
  padding: 1rem;
`;
export const UserContainer = styled.div`
`;
export const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 1rem;
  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
`;
export const UserInfo = styled.div`
  label {
    display: block;
  }
  input {
    margin-bottom: 10px;
  }
`;
