import React, { memo } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import EducationMedia from "./EducationMedia";
import "./styles.css";

const Education = ({ shcool,
  degree,
  field_of_study,
  start_year,
  end_year,
  location,
  grade,
  activities_and_societies,
  description,
  media }) => {


  const renderEducationMedia =
    media.map((e, i) => (
      <Row>
        <EducationMedia key={i} {...e} />
      </Row>
    ));


  const start_end_year = `${start_year} - ${end_year} `;
  return (
    <Row className="Education" >
      <Col xs={8}>
        <span>{start_end_year}</span>
        <span>{shcool.toUpperCase()}</span>
      </Col>
      <Col xs={4}>
        <span className="float-right">{location}</span>
      </Col>
      <Col md={{ span: 12, offset: 1 }} xs={12}>
        <b>{degree}, </b>
        <span>{field_of_study}</span>
        <span>{` (GPA: ${grade} / 4.0)`}</span>
      </Col>
      <Col md={{ span: 12, offset: 1 }} xs={12}>
        <ul>
          <li>{description}</li>
          <li>{activities_and_societies}</li>
        </ul>
      </Col>
    </Row>
  );

};

Education.propTypes = {
  shcool: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  field_of_study: PropTypes.string.isRequired,
  start_year: PropTypes.number.isRequired,
  end_year: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired,
  activities_and_societies: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  media: PropTypes.array.isRequired
};
export default memo(Education);
