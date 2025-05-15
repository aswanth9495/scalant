export const getResumeProgram = (courseProduct) => {
  if (courseProduct === 'data_science') {
    return 'dsml';
  }
  return 'academy';
};

export const formatExperience = (years, months) => {
  if (years === 0) {
    return `${months} months`;
  }
  if (months === 0) {
    return `${years} years`;
  }
  return `${years} years ${months} months`;
};
