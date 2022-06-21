const days = [
  {
    id: 1,
    name: "Monday",
    appointments: [1, 2],
    interviewers: [1, 2],
    spots: 0,
  },
];

const appointments = {
  1: {
    id: 1,
    time: "12pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: 1,
    },
  },
  2: {
    id: 2,
    time: "1pm",
    interview: null,
  },
  3: {
    id: 3,
    time: "2pm",
    interview: null,
  },
};

const interviewers = {
  1: {
    id: 1,
    name: "Sylvia Palmer",
    avatar: "https://i.imgur.com/LpaY82x.png",
  },
  2: {
    id: 2,
    name: "Tori Malcolm",
    avatar: "https://i.imgur.com/Nmx0Qxo.png",
  },
};

const state = {
  day: "Monday",
  days,
  appointments,
  interviewers,
};

// const newState = {...sa}

// What does spots mean?
// Number of available appts for the day (empty)

// appointments.interview
// null => not booked
// obj => booked

// How can we count how many free appts ?
// Count how many nulls we have in interview
// .filter / .length

// We know how many nulls (free spots)
// How deep should we go to replace the value
state.days[0].spots;

// .spots => primitive
// dayObj => obj (should spread)
// daysArr => arr (should spread)
// state => obj (should spread)

// updateSpots => should return a new state with updated spots
// updateSpots => should return a new days arr with updated spots

const updateSpots = (state) => {
  // Find the day and make a copy
  const dayToChange = state.days.find((day) => day.name === state.day);
  const newDay = { ...dayToChange };

  // Count how many free spots
  const emptyAppointments = dayToChange.appointments.filter(
    (appointmentId) => !state.appointments[appointmentId].interview
  );
  const spots = emptyAppointments.length;

  // Update spots in the newDay
  newDay.spots = spots;

  // Copy the days and replace old day with new day
  const newDays = [...state.days];
  const dayIndex = state.days.findIndex((day) => day.name === state.day);

  newDays[dayIndex] = newDay;

  // Update days inside the state

  const newState = { ...state };
  newState.days = newDays;

  return newState;
};

console.log(updateSpots(state));
console.log(state);

// bookInterview
// Update state.appointments
// setState with the updated state

// create a new state
// update state.appointments
// run updateSpots
// set state

// updatedDays

const updateAppointments = (state, interview, id) => {
  const newAppointment = { ...state.appointments[id] };
  newAppointment.interview = interview;

  const updatedAppointments = { ...state.appointments };
  updatedAppointments[id] = newAppointment;

  const newState = { ...state };
  newState.appointments = updatedAppointments;
};

const bookInterview = (interview, id) => {
  const newState = updateAppointments(state, interview, id);
  const newNewState = updateSpots(newState);

  setState(newNewState);
};
