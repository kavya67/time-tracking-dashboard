import React from "react";
import Card from "react-bootstrap/Card";

import "./Report.css";

import iconEllipsis from "../../images/icon-ellipsis.svg";

function Report({ bgColor, icon, title, timeframes, selectedDay }) {
  const { current, previous } = timeframes[selectedDay];
  return (
    <Card className={`report-card ${bgColor} `}>
      <Card.Img src={icon} alt="icon" className="card-icon" />
      <Card.Body className="card-box my-3">
        <Card.Title className="d-flex justify-content-between">
          <h4>{title}</h4>
          <img
            src={iconEllipsis}
            alt="icon ellipsis"
            className="icon-ellipsis"
          />
        </Card.Title>
        <Card.Text>
          <span className="report-time-text">{`${current}hrs`}</span>
          <br />
          <span className="report-time-sub-text">
            last week - {`${previous}hrs`}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Report;
