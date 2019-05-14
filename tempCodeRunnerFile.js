 if (n == 0 || attendtedHours >= availableHours) {
    return attendedMeetings;
  }

  if (meetings[n - 1].hours + attendtedHours > availableHours) {
    return recursive(n - 1, attendtedHours, meetings, availableHours, attendedMeetings);
  }


  return max(recursive(n - 1, attendtedHours + meetings[n - 1].hours, meetings, availableHours,attendedMeetings.concat([meetings[n-1]])),
    recursive(n - 1, attendtedHours, meetings, availableHours,attendedMeetings));
