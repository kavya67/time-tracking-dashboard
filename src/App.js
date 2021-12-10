import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProfileCard from "./components/ProfileCard/ProfileCard";
import Report from "./components/Report/Report";

import work from "./images/icon-work.svg";
import play from "./images/icon-play.svg";
import social from "./images/icon-social.svg";
import self from "./images/icon-self-care.svg";
import study from "./images/icon-study.svg";
import exercise from "./images/icon-exercise.svg";

function App() {
  const reportImages = [work, play, study, exercise, social, self];

  const [reportsData, setReportsData] = useState([]);
  const [selectedDay, setSelectedData] = useState("daily");

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/kavya67/dummy-api/dashboard")
      .then((result) => {
        setReportsData((reportsData) => [...reportsData, ...result.data]);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleTimeFrame = (day) => {
    setSelectedData(day);
  };

  console.log("state", reportsData);
  console.log("day", selectedDay);
  return (
    <Container className="pt-12">
      <Row>
        <Col lg={3}>
          <ProfileCard
            handleTimeFrame={handleTimeFrame}
            selectedDay={selectedDay}
          />
        </Col>
        <Col lg={9}>
          <Row>
            {reportsData.length > 0
              ? reportsData.map((report, index) => (
                  <Col lg={4} key={index}>
                    <Report
                      bgColor={report.title}
                      title={report.title}
                      icon={reportImages[index]}
                      timeframes={report.timeframes}
                      selectedDay={selectedDay}
                      handleTimeFrame={handleTimeFrame}
                    />
                  </Col>
                ))
              : ""}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
