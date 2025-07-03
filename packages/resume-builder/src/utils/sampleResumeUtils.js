import {
  JOB_ROLES,
  PROGRAM_TYPES,
  RESUME_PDF_LINK_KEYS,
  RESUME_PDF_LINKS,
} from './constants';

const getAcademySampleResume = (jobRole, techExperience) => {
  switch (jobRole) {
    case JOB_ROLES.fresher:
      return RESUME_PDF_LINK_KEYS.FRESHER;
    case JOB_ROLES.nonTech:
      return RESUME_PDF_LINK_KEYS.NON_TECH;
    case JOB_ROLES.qualityAssuranceOrSdeInTesting:
      return RESUME_PDF_LINK_KEYS.NON_TECH;
    case JOB_ROLES.salesforceOrServicenowOrRpa:
      return RESUME_PDF_LINK_KEYS.NON_TECH;
    case techExperience > 2:
      return RESUME_PDF_LINK_KEYS.SENIOR_BACKEND;
    case techExperience < 2:
      return RESUME_PDF_LINK_KEYS.JUNIOR_FRONTEND;
    default:
      return RESUME_PDF_LINK_KEYS.JUNIOR_FRONTEND;
  }
};

const getDsmlSampleResume = (jobRole) => {
  switch (jobRole) {
    case JOB_ROLES.fresher:
      return RESUME_PDF_LINK_KEYS.DSML_FRESHER;
    case JOB_ROLES.nonTech:
      return RESUME_PDF_LINK_KEYS.NON_TECH_BACKGROUND;
    case JOB_ROLES.nonDeveloperAndItProfessional:
      return RESUME_PDF_LINK_KEYS.NON_TECH_BACKGROUND;
    case JOB_ROLES.developer:
      return RESUME_PDF_LINK_KEYS.NON_TECH_BACKGROUND;
    case JOB_ROLES.dataAnalystOrBusinessAnalyst:
      return RESUME_PDF_LINK_KEYS.DATA_ANALYST;
    case JOB_ROLES.dataScientistOrMachineLearningEngineer:
      return RESUME_PDF_LINK_KEYS.DATA_SCIENTIST;
    default:
      return RESUME_PDF_LINK_KEYS.NON_TECH_BACKGROUND;
  }
};

const getDevOpsSampleResume = (jobRole) => {
  switch (jobRole) {
    case JOB_ROLES.fresher:
      return RESUME_PDF_LINK_KEYS.FRESHER;
    case JOB_ROLES.nonTech:
      return RESUME_PDF_LINK_KEYS.NON_TECH;
    case JOB_ROLES.dataAnalystOrBusinessAnalyst:
      return RESUME_PDF_LINK_KEYS.DATA_ANALYST;
    case JOB_ROLES.dataScientistOrMachineLearningEngineer:
      return RESUME_PDF_LINK_KEYS.DATA_SCIENTIST;
    default:
      return RESUME_PDF_LINK_KEYS.FRESHER;
  }
};

export const getSampleResume = (jobRole, techExperience, program) => {
  let sampleResumeType = null;
  if (program === PROGRAM_TYPES.ACADEMY) {
    sampleResumeType = getAcademySampleResume(jobRole, techExperience);
  } else if (program === PROGRAM_TYPES.DSML) {
    sampleResumeType = getDsmlSampleResume(jobRole);
  } else if (program === PROGRAM_TYPES.DEVOPS) {
    sampleResumeType = getDevOpsSampleResume(jobRole);
  }
  const sampleResume = RESUME_PDF_LINKS[sampleResumeType];

  return sampleResume;
};
