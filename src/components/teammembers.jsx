import React from "react";


export default function Teammembers({ membersList }) {
  return (
    <div className="member-container">
      {membersList.map((members) => (
        <div
          key={members.id}
          className="card"
        >
          <div className="image">
            <img
              src={members.image}
              alt="a female profile"
              className="ss"
            />
          </div>

          <div className="text">
            <p> <span>Full Name</span>: {members.fullName} </p>
            <p>
               <span>Designation: </span>{members.designation}{" "}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
