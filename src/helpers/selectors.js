export function getAppointmentsForDay(state, day) {
  const selectedDay = state.days.find((dayName) => dayName.name === day);
  if (!selectedDay) {
    return [];
  }
  return selectedDay.appointments.map((appointmentId) => state.appointments[appointmentId]);
};

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  return { student: interview.student, interviewer: state.interviewers[interview.interviewer] };
};


export function getInterviewersForDay(state, day) {
  const selectedDay = state.days.find((dayName) => dayName.name === day);
  if (!selectedDay) {
    return [];
  }

  const interviewerArray = Object.values(state.interviewers);

  const result = interviewerArray.filter(
    (interviewersArray) => selectedDay.interviewers.includes(interviewersArray.id)
  );

  return result;
}