import { JOB_ROLES, PROGRAM_TYPES, RESUME_HIGHLIGHT_IMAGES } from './constants';

const getAcademyResumeHighlightImage = (jobRole) => {
  switch (jobRole) {
    case JOB_ROLES.fresher:
      return RESUME_HIGHLIGHT_IMAGES.fresherNonTech;
    case JOB_ROLES.nonTech:
      return RESUME_HIGHLIGHT_IMAGES.fresherNonTech;
    case JOB_ROLES.qualityAssuranceOrSdeInTesting:
      return RESUME_HIGHLIGHT_IMAGES.qualityAssurance;
    case JOB_ROLES.salesforceOrServicenowOrRpa:
      return RESUME_HIGHLIGHT_IMAGES.qualityAssurance;
    case JOB_ROLES.engineeringLeadership:
      return RESUME_HIGHLIGHT_IMAGES.engineeringLeadership;
    default:
      return RESUME_HIGHLIGHT_IMAGES.allExceptEngineeringLeadership;
  }
};

const getDsmlResumeHighlightImage = (jobRole) => {
  switch (jobRole) {
    case JOB_ROLES.fresher:
      return RESUME_HIGHLIGHT_IMAGES.dsmlFresherNonTech;
    case JOB_ROLES.nonTech:
      return RESUME_HIGHLIGHT_IMAGES.dsmlFresherNonTech;
    case JOB_ROLES.nonDeveloperAndItProfessional:
      return RESUME_HIGHLIGHT_IMAGES.dsmlNonDeveloperAndItProfessional;
    case JOB_ROLES.developer:
      return RESUME_HIGHLIGHT_IMAGES.dsmlDeveloper;
    case JOB_ROLES.dataAnalystOrBusinessAnalyst:
      return RESUME_HIGHLIGHT_IMAGES.dsmlDataAnalyst;
    case JOB_ROLES.dataScientistOrMachineLearningEngineer:
      return RESUME_HIGHLIGHT_IMAGES.dsmlDataAnalyst;
    default:
      return RESUME_HIGHLIGHT_IMAGES.dsmlFresherNonTech;
  }
};

export const getResumeHighlightImage = (jobRole, programType) => {
  if (!jobRole || !programType) {
    return RESUME_HIGHLIGHT_IMAGES.default;
  }

  if (programType === PROGRAM_TYPES.ACADEMY) {
    return getAcademyResumeHighlightImage(jobRole);
  } else if (programType === PROGRAM_TYPES.DSML) {
    return getDsmlResumeHighlightImage(jobRole);
  }

  return RESUME_HIGHLIGHT_IMAGES.default;
};
