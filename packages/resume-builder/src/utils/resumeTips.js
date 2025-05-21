import { RESUME_PERSONAS } from './constants';

export const getResumeTips = (resumePersonaData, program) => {
  const { techExperience, currentJobRole } = resumePersonaData;
  let tips;

  if (program === 'academy' && currentJobRole === 'Fresher') {
    tips = RESUME_PERSONAS.ACADEMY_FRESHER;
  } else if (
    program === 'academy' &&
    [
      'Quality Assurance / SDE in Testing',
      'Salesforce / Servicenow / RPA',
    ].includes(currentJobRole)
  ) {
    tips = RESUME_PERSONAS.ACADEMY_NON_TECH_FRESHER;
  } else if (program === 'academy' && techExperience < 24) {
    tips = RESUME_PERSONAS.ACADEMY_JUNIOR_FRONTEND_DEVELOPER;
  } else if (program === 'academy' && techExperience >= 24) {
    tips = RESUME_PERSONAS.ACADEMY_SENIOR_BACKEND_DEVELOPER;
  } else if (program === 'dsml' && currentJobRole === 'Fresher') {
    tips = RESUME_PERSONAS.DSML_FRESHER;
  } else if (
    program === 'dsml' &&
    ['Non-Developer & IT Professional', 'Developer'].includes(currentJobRole)
  ) {
    tips = RESUME_PERSONAS.DSML_NON_TECH_FRESHER;
  } else if (
    program === 'dsml' &&
    currentJobRole === 'Data Analyst / Business Analyst'
  ) {
    tips = RESUME_PERSONAS.DSML_DATA_ANALYST;
  } else if (
    program === 'dsml' &&
    currentJobRole === 'Data Scientist / Machine Learning Engineer'
  ) {
    tips = RESUME_PERSONAS.DSML_DATA_SCIENTIST;
  } else {
    tips = [];
  }

  return tips;
};
