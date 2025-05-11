export const PREFERENCE_SETTINGS_IMAGE =
  // eslint-disable-next-line max-len
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

export const RESUME_PDF_LINKS = {
  fresher:
    'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/124/611/original/Fresher_Resume.pdf',
  'junior-back-end-engineer':
    'https://drive.google.com/file/d/1gLFB1Q39J8lta99vE6E8DxE4rR8m4e3U/view',
  'junior-front-end-engineer':
    'https://drive.google.com/file/d/1_1CoX4N76Urh6ykipNeR07wC1SL31MPP/view',
  'senior-back-end-engineer':
    'https://drive.google.com/file/d/14uGj3odWbuvO7W7SOWj-3C-x2JOTizF3/view',
  'non-tech':
    'https://drive.google.com/file/d/10_-rEzjEh3u4sogUZZfuduL5yYsBWby6/view',
  'engg-manager':
    'https://drive.google.com/file/d/1arcCU7GOqqjXaFS6JHsTT7_Ss2Gklfez/view',
  'non-tech-background':
    'https://drive.google.com/file/d/1K-HyDftO9sXsIfOZVzJ2LTPTrpL1vu0R/view',
  'data-analyst':
    'https://drive.google.com/file/d/1lQXurdy_S5hBAWhygUg7-sL_TsB7PRHy/view',
  'data-scientist':
    'https://drive.google.com/file/d/1cSPlK-xgYhx358mfoKiMzCsPjelObgLN/view',
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
