import React from "react";
import Card from "react-bootstrap/Card";

import "./ProfileCard.css";
import user from "../../images/image-jeremy.png";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

function ProfileCard({ handleTimeFrame, selectedDay }) {
  const profileDays = [
    { id: 1, day: "daily" },
    { id: 2, day: "weekly" },
    { id: 3, day: "monthly" },
  ];
  return (
    <div>
      <Card className="card">
        <Card.Title className="user-profile">
          <img src={user} className="cardImg" alt="user" />
          <div className="username my-lg-5">
            <span>Report for</span>
            <h1>jeremy robson</h1>
          </div>
        </Card.Title>
        <Card.Body>
          <ListGroup>
            {profileDays.map(({ id, day }) => (
              <ListGroupItem key={id} className="day-item">
                <button
                  className={`btn-day ${selectedDay === day ? "isActive" : ""}`}
                  type="button"
                  onClick={() => handleTimeFrame(day)}
                >
                  {day}
                </button>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProfileCard;
