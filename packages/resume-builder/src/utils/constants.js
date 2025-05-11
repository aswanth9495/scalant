/* eslint-disable max-len */
export const PREFERENCE_SETTINGS_IMAGE =
  'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/124/609/original/image_%281%29.png?1746936231';

export const RESUME_BUILDER_STEPS = {
  ACKNOWLEDGEMENT: {
    key: 'acknowledgement',
    title: 'Acknowledgement',
    component: 'Acknowledgement',
  },
  PREFERENCE_SETTINGS: {
    key: 'preferenceSettings',
    title: 'Preference Settings',
    component: 'PreferenceSettings',
  },
  RESUME_BASIC_QUESTIONS: {
    key: 'resumeBasicQuestions',
    title: 'Resume Basic Questions',
    component: 'ResumeBasicQuestions',
  },
  RESUME_TIPS: {
    key: 'resumeTips',
    title: 'Resume Tips',
    component: 'ResumeTips',
  },
  RESUME_STEPS: {
    key: 'resumeSteps',
    title: 'Resume Steps',
    component: 'ResumeSteps',
  },
};

export const STEPS_ORDER = [
  RESUME_BUILDER_STEPS.ACKNOWLEDGEMENT,
  RESUME_BUILDER_STEPS.PREFERENCE_SETTINGS,
  RESUME_BUILDER_STEPS.RESUME_BASIC_QUESTIONS,
  RESUME_BUILDER_STEPS.RESUME_TIPS,
  RESUME_BUILDER_STEPS.RESUME_STEPS,
];

const RESUME_PREVIEW_BASE_URL =
  'https://content.interviewbit.com/Resume+Repo+resumes';

// Resume PDF link key constants
export const RESUME_PDF_LINK_KEYS = {
  FRESHER: 'fresher',
  JUNIOR_BACKEND: 'junior-back-end-engineer',
  JUNIOR_FRONTEND: 'junior-front-end-engineer',
  SENIOR_BACKEND: 'senior-back-end-engineer',
  NON_TECH: 'non-tech',
  ENGG_MANAGER: 'engg-manager',
  NON_TECH_BACKGROUND: 'non-tech-background',
  DATA_ANALYST: 'data-analyst',
  DATA_SCIENTIST: 'data-scientist',
};

// Job role to resume PDF link key mapping
export const JOB_ROLE_TO_RESUME_PDF_KEY = {
  Fresher: RESUME_PDF_LINK_KEYS.FRESHER,
  'Non-Tech': RESUME_PDF_LINK_KEYS.NON_TECH,
  'Engineering Leadership': RESUME_PDF_LINK_KEYS.ENGG_MANAGER,
  'Data Analyst / Business Analyst': RESUME_PDF_LINK_KEYS.DATA_ANALYST,
  'Data Scientist / Machine Learning Engineer':
    RESUME_PDF_LINK_KEYS.DATA_SCIENTIST,
  'Non-Developer & IT Professional': RESUME_PDF_LINK_KEYS.NON_TECH_BACKGROUND,
  'Backend / Backend Heavy Full-stack': RESUME_PDF_LINK_KEYS.JUNIOR_BACKEND,
  'Frontend/Full-stack': RESUME_PDF_LINK_KEYS.JUNIOR_FRONTEND,
  'Quality Assurance / SDE in Testing': RESUME_PDF_LINK_KEYS.FRESHER,
  'Salesforce / Servicenow / RPA': RESUME_PDF_LINK_KEYS.FRESHER,
  'Embedded Systems Engineer': RESUME_PDF_LINK_KEYS.FRESHER,
  'Mobile Engineer': RESUME_PDF_LINK_KEYS.JUNIOR_FRONTEND,
  'DevOps / Network Engineer': RESUME_PDF_LINK_KEYS.JUNIOR_BACKEND,
  'Data Engineer': RESUME_PDF_LINK_KEYS.DATA_ANALYST,
  Developer: RESUME_PDF_LINK_KEYS.FRESHER,
};

export const RESUME_PDF_LINKS = {
  [RESUME_PDF_LINK_KEYS.FRESHER]: {
    preview: `${RESUME_PREVIEW_BASE_URL}/fresher/preview/preview-after.png`,
    pdfLink:
      'https://drive.google.com/file/d/1lfjG9TkvhP6tja9reMmsiYYRndlkCJD7/view',
  },
  [RESUME_PDF_LINK_KEYS.JUNIOR_BACKEND]: {
    preview: `${RESUME_PREVIEW_BASE_URL}/junior-back-end-engineer/preview/preview-after.png`,
    pdfLink:
      'https://drive.google.com/file/d/1gLFB1Q39J8lta99vE6E8DxE4rR8m4e3U/view',
  },
  [RESUME_PDF_LINK_KEYS.JUNIOR_FRONTEND]: {
    preview: `${RESUME_PREVIEW_BASE_URL}/junior-front-end-engineer/preview/preview-after.png`,
    pdfLink:
      'https://drive.google.com/file/d/1_1CoX4N76Urh6ykipNeR07wC1SL31MPP/view',
  },
  [RESUME_PDF_LINK_KEYS.SENIOR_BACKEND]: {
    preview: `${RESUME_PREVIEW_BASE_URL}/senior-back-end-engineer/preview/preview-after.png`,
    pdfLink:
      'https://drive.google.com/file/d/14uGj3odWbuvO7W7SOWj-3C-x2JOTizF3/view',
  },
  [RESUME_PDF_LINK_KEYS.NON_TECH]: {
    preview: `${RESUME_PREVIEW_BASE_URL}/non-tech/preview/preview-after.png`,
    pdfLink:
      'https://drive.google.com/file/d/10_-rEzjEh3u4sogUZZfuduL5yYsBWby6/view',
  },
  [RESUME_PDF_LINK_KEYS.ENGG_MANAGER]: {
    preview: `${RESUME_PREVIEW_BASE_URL}/engg-manager/preview/preview-after.png`,
    pdfLink:
      'https://drive.google.com/file/d/1arcCU7GOqqjXaFS6JHsTT7_Ss2Gklfez/view',
  },
  [RESUME_PDF_LINK_KEYS.NON_TECH_BACKGROUND]: {
    preview: `${RESUME_PREVIEW_BASE_URL}/DSML/non-tech-background/preview/preview-after.png`,
    pdfLink:
      'https://drive.google.com/file/d/1K-HyDftO9sXsIfOZVzJ2LTPTrpL1vu0R/view',
  },
  [RESUME_PDF_LINK_KEYS.DATA_ANALYST]: {
    preview: `${RESUME_PREVIEW_BASE_URL}/DSML/data-analyst/preview/preview-after.png`,
    pdfLink:
      'https://drive.google.com/file/d/1lQXurdy_S5hBAWhygUg7-sL_TsB7PRHy/view',
  },
  [RESUME_PDF_LINK_KEYS.DATA_SCIENTIST]: {
    preview: `${RESUME_PREVIEW_BASE_URL}/DSML/data-scientist/preview/preview-after.png`,
    pdfLink:
      'https://drive.google.com/file/d/1cSPlK-xgYhx358mfoKiMzCsPjelObgLN/view',
  },
};

/**
 * Get resume preview and PDF link based on job role
 * @param {string} jobRole - The selected job role
 * @returns {Object} Object containing preview and pdfLink
 */
export const getResumeTemplateByJobRole = (jobRole) => {
  const pdfKey = JOB_ROLE_TO_RESUME_PDF_KEY[jobRole];
  if (!pdfKey) {
    // Return default fresher template if no mapping found
    return RESUME_PDF_LINKS[RESUME_PDF_LINK_KEYS.FRESHER];
  }
  return RESUME_PDF_LINKS[pdfKey];
};

// Job role constants
export const ACADEMY_JOB_ROLES = [
  { value: 'Fresher', label: 'Fresher' },
  { value: 'Non-Tech', label: 'Non-Tech' },
  {
    value: 'Quality Assurance / SDE in Testing',
    label: 'Quality Assurance / SDE in Testing',
  },
  {
    value: 'Salesforce / Servicenow / RPA',
    label: 'Salesforce / Servicenow / RPA',
  },
  {
    value: 'Embedded Systems Engineer',
    label: 'Embedded Systems Engineer',
  },
  {
    value: 'Mobile Engineer',
    label: 'Mobile Engineer',
  },
  {
    value: 'Frontend/Full-stack',
    label: 'Frontend/Full-stack',
  },
  {
    value: 'Backend / Backend Heavy Full-stack',
    label: 'Backend / Backend Heavy Full-stack',
  },
  {
    value: 'DevOps / Network Engineer',
    label: 'DevOps / Network Engineer',
  },
  {
    value: 'Data Engineer',
    label: 'Data Engineer',
  },
  {
    value: 'Engineering Leadership',
    label: 'Engineering Leadership',
  },
];

export const DSML_JOB_ROLES = [
  {
    value: 'Fresher',
    label: 'Fresher',
  },
  {
    value: 'Non-Tech',
    label: 'Non-Tech',
  },
  {
    value: 'Non-Developer & IT Professional',
    label: 'Non-Developer & IT Professional',
  },
  {
    value: 'Developer',
    label: 'Developer',
  },
  {
    value: 'Data Analyst / Business Analyst',
    label: 'Data Analyst / Business Analyst',
  },
  {
    value: 'Data Scientist / Machine Learning Engineer',
    label: 'Data Scientist / Machine Learning Engineer',
  },
];

// Program to job roles mapping
export const PROGRAM_JOB_ROLES = {
  academy: ACADEMY_JOB_ROLES,
  dsml: DSML_JOB_ROLES,
};

const RESUME_TIPS = {
  socialLinks: {
    icon: '🔗',
    title: 'Add Social Links:',
    description: `Share coding profiles like GitHub, LeetCode, or 
      Codeforces to show your skills.`,
  },
  keySkills: {
    icon: '🏆',
    title: 'Highlight Key Skills:',
    description: `List at least 5 relevant technical skills that align with 
      the role you're targeting, like languages, tools, or frameworks.`,
  },
  projects: {
    icon: '📄',
    title: 'Showcase Projects:',
    description: `Add 2–3 strong projects with bullet points, 
    metrics, and links to demos.`,
  },
  academicDetails: {
    icon: '🎓',
    title: 'Add Academic Details:',
    description: `Mention coding achievements, certifications,
      and any relevant coursework.`,
  },
  workExperience: {
    icon: '💼',
    title: 'Add Work Experience:',
    description: `List previous roles with bullet points, 
    metrics, and links to demos.`,
  },
};

export const RESUME_PERSONAS = {
  ACADEMY_FRESHER: [
    RESUME_TIPS.socialLinks,
    RESUME_TIPS.projects,
    RESUME_TIPS.keySkills,
  ],
  ACADEMY_NON_TECH_FRESHER: [
    RESUME_TIPS.socialLinks,
    RESUME_TIPS.projects,
    RESUME_TIPS.keySkills,
    RESUME_TIPS.workExperience,
  ],
  ACADEMY_JUNIOR_FRONTEND_DEVELOPER: [
    RESUME_TIPS.socialLinks,
    RESUME_TIPS.workExperience,
    RESUME_TIPS.projects,
    RESUME_TIPS.keySkills,
  ],
  ACADEMY_SENIOR_BACKEND_DEVELOPER: [
    RESUME_TIPS.socialLinks,
    RESUME_TIPS.workExperience,
    RESUME_TIPS.projects,
    RESUME_TIPS.keySkills,
  ],
  DSML_FRESHER: [
    RESUME_TIPS.socialLinks,
    RESUME_TIPS.projects,
    RESUME_TIPS.keySkills,
  ],
  DSML_NON_TECH_FRESHER: [
    RESUME_TIPS.socialLinks,
    RESUME_TIPS.projects,
    RESUME_TIPS.keySkills,
    RESUME_TIPS.workExperience,
  ],
  DSML_DATA_ANALYST: [
    RESUME_TIPS.socialLinks,
    RESUME_TIPS.workExperience,
    RESUME_TIPS.projects,
    RESUME_TIPS.keySkills,
  ],
  DSML_DATA_SCIENTIST: [
    RESUME_TIPS.socialLinks,
    RESUME_TIPS.workExperience,
    RESUME_TIPS.projects,
    RESUME_TIPS.keySkills,
  ],
};
