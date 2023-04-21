import React from "react";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import "components/Appointments/styles.scss";

export default function Appointment(props) {

  const appointmentComponent = function() {
    if (props.interview) {
      return <Show student={props.interview.student} interviewer={props.interview.interviewer} />;
    } else {
      return <Empty />;
    }
  };

  return (
    <article className="appointment">
      <Header time={props.time} />
      {appointmentComponent()}
    </article>
  );
}