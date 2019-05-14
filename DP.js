function optimizedMeeting(meetings, availableHours) {

  return recursive(meetings.length, 0, meetings, availableHours, []);

}

const reducer = (acc, curr) => acc + curr;

function max(firstMeetings, secondMeetings) {

  let first = firstMeetings.length > 0 ? firstMeetings.map(el => el.hours).reduce(reducer) : 0;

  let second = secondMeetings.length > 0 ? secondMeetings.map(el => el.hours).reduce(reducer) : 0;

  return first > second ? firstMeetings : secondMeetings;
}

function recursive(n, attendtedHours, meetings, availableHours, attendedMeetings) {

  if (n == 0 || attendtedHours >= availableHours) {
    return attendedMeetings;
  }

  if (meetings[n - 1].hours + attendtedHours > availableHours) {
    return recursive(n - 1, attendtedHours, meetings, availableHours, attendedMeetings);
  }


  return max(recursive(n - 1, attendtedHours + meetings[n - 1].hours, meetings, availableHours, attendedMeetings.concat([meetings[n - 1]])),
    recursive(n - 1, attendtedHours, meetings, availableHours, attendedMeetings));

}

console.log(optimizedMeeting([{
  hours: 4
}, {
  hours: 4
}, {
  hours: 5
}], 9))



/**
 * 
 * 
 * {hours: 4} , { hours: 4} , {hours:5}
 * availableHours = 8
 * 
 * 
 * 
 * 
 */