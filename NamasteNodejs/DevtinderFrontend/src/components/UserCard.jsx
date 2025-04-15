import React from "react";

const UserCard = ({ user }) => {
    const { firstName, lastName, photoUrl, gender, age , about} = user;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={photoUrl}
          alt="Photo"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName +" " + lastName}</h2>
        {age && gender &&<p>
          {age + " , " + gender}
        </p>}
        {about && <p>
          {about}
        </p>}
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Ignored</button>
          <button className="btn btn-primary">Accept</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
