import React from "react";
import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form action="post">
        <div className="newUserForm">
          <div className="newUserFormItem">
            <label>Username</label>
            <input type="text" placeholder="jhon" />
          </div>
          <div className="newUserFormItem">
            <label>Full name</label>
            <input type="text" placeholder="Jhon Smith" />
          </div>
          <div className="newUserFormItem">
            <label>Email</label>
            <input type="text" placeholder="jhon@gmail.com" />
          </div>
          <div className="newUserFormItem">
            <label>Password</label>
            <input type="password" placeholder="password" />
          </div>
          <div className="newUserFormItem">
            <label>Phone</label>
            <input type="text" placeholder="+1 145 152 36" />
          </div>
          <div className="newUserFormItem">
            <label>Address</label>
            <input type="text" placeholder="New York | USA" />
          </div>

          <div className="newUserFormItem">
            <label>Gender</label>
            <div className="newUserGender">
              <input type="radio" name="gender" value="male" id="male" />
              <label for="male">Male</label>
              <input type="radio" name="gender" value="female" id="female" />
              <label for="female">Female</label>
              <input type="radio" name="gender" value="other" id="other" />
              <label for="other">Other</label>
            </div>
          </div>

          <div className="newUserFormItem">
            <label>Active</label>
            <select name="active" id="active" className="newUserSelect">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
