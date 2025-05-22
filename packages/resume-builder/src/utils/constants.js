export const PROGRAM_TYPES = {
  ACADEMY: 'academy',
  DSML: 'dsml',
};

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

export const PROJECT_FORM_REQUIRED_FIELDS = [
  'title',
  'project_link',
  'description',
];

export const PERSONAL_DETAILS_FORM_REQUIRED_FIELDS = [
  'name',
  'phone_number',
  'email',
  'gender',
  'linkedin',
];

export const WORK_EXPERIENCE_FORM_REQUIRED_FIELDS = [
  'company',
  'position',
  'from',
];

export const EDUCATION_FORM_REQUIRED_FIELDS = [
  'university',
  'degree',
  'marks',
  'graduation_date',
];

export const STEPS_ORDER = [
  RESUME_BUILDER_STEPS.ACKNOWLEDGEMENT,
  RESUME_BUILDER_STEPS.PREFERENCE_SETTINGS,
  RESUME_BUILDER_STEPS.RESUME_BASIC_QUESTIONS,
  RESUME_BUILDER_STEPS.RESUME_TIPS,
  RESUME_BUILDER_STEPS.RESUME_STEPS,
];

const RESUME_PREVIEW_BASE_URL =
  'https://content.interviewbit.com/Resume+Repo+resumes';

export const JOB_ROLES = {
  fresher: 'Fresher',
  nonTech: 'Non-Tech',
  qualityAssuranceOrSdeInTesting: 'Quality Assurance / SDE in Testing',
  salesforceOrServicenowOrRpa: 'Salesforce / Servicenow / RPA',
  embeddedSystemsEngineer: 'Embedded Systems Engineer',
  mobileEngineer: 'Mobile Engineer',
  frontendOrFullStack: 'Frontend/Full-stack',
  backendOrBackendHeavyFullStack: 'Backend / Backend Heavy Full-stack',
  devopsOrNetworkEngineer: 'DevOps / Network Engineer',
  dataEngineer: 'Data Engineer',
  engineeringLeadership: 'Engineering Leadership',
  nonDeveloperAndItProfessional: 'Non-Developer & IT Professional',
  developer: 'Developer',
  dataAnalystOrBusinessAnalyst: 'Data Analyst / Business Analyst',
  dataScientistOrMachineLearningEngineer:
    'Data Scientist / Machine Learning Engineer',
};

export const JOB_ROLES_BY_PROGRAM = {
  academy: [
    JOB_ROLES.fresher,
    JOB_ROLES.nonTech,
    JOB_ROLES.qualityAssuranceOrSdeInTesting,
    JOB_ROLES.salesforceOrServicenowOrRpa,
    JOB_ROLES.embeddedSystemsEngineer,
    JOB_ROLES.mobileEngineer,
    JOB_ROLES.frontendOrFullStack,
    JOB_ROLES.backendOrBackendHeavyFullStack,
    JOB_ROLES.devopsOrNetworkEngineer,
    JOB_ROLES.dataEngineer,
    JOB_ROLES.engineeringLeadership,
  ],
  dsml: [
    JOB_ROLES.fresher,
    JOB_ROLES.nonTech,
    JOB_ROLES.nonDeveloperAndItProfessional,
    JOB_ROLES.developer,
    JOB_ROLES.dataAnalystOrBusinessAnalyst,
    JOB_ROLES.dataScientistOrMachineLearningEngineer,
  ],
};

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
  DSML_FRESHER: 'dsml-fresher',
};

export const RESUME_PDF_LINKS = {
  [RESUME_PDF_LINK_KEYS.DSML_FRESHER]: {
    preview: `${RESUME_PREVIEW_BASE_URL}/DSML/fresher/preview/preview-after.png`,
    pdfLink:
      'https://drive.google.com/file/d/1lfjG9TkvhP6tja9reMmsiYYRndlkCJD7/view',
  },
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

export const SOCIAL_LINKS = [
  'codeforces',
  'hackerrank',
  'codechef',
  'hackerearth',
  'geeksforgeeks',
  'leetcode',
  'scaler',
];

export const RESUME_HIGHLIGHT_IMAGES = {
  default: {
    imageLink:
      'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/126/271/original/Resume_Default_from_Figma_%281%29.png?1747392412',
    recommendation: 'Recommendations based on your persona will appear here',
  },
  fresherNonTech: {
    imageLink:
      'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/126/272/original/Fresher_Non-Tech_Resume.png?1747392498',
    recommendation:
      'The Projects section needs to be the main focus of your resume. Build and Include 2-3 impactful projects to showcase your skills.',
  },
  qualityAssurance: {
    imageLink:
      'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/126/273/original/Quality_Assurance_Resume_Builder.png?1747392566',
    recommendation: `The Projects section needs to be the main focus of your resume. Build and Include 2-3 impactful projects to showcase your skills.

In Work Experience, keep it short and include test automation /  coding-type tasks with the impact and tools used. 

In the Skills section, include popular languages, libraries and tools used hands-on at work.`,
  },
  allExceptEngineeringLeadership: {
    imageLink:
      'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/126/274/original/Resume_Builder_All_Except_Engineering_Leadership.png?1747392602',
    recommendation: `Work Experience needs to be the main focus of your resume. 

Include key and impactful tasks / projects with numbers across your work experience with the Programming languages, frameworks and tools used. 

In the Skills section, include popular Programming languages, libraries and tools used hands-on at work. 

Include complex / elaborate Projects done outside work if your tech work experience is under 2 years and you do not have enough impactful work-related items.
`,
  },
  engineeringLeadership: {
    imageLink:
      'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/126/276/original/Engineering_Leadership_Resume.png?1747392633',
    recommendation: `Work Experience needs to be the major focus of your resume. 

Include work experiences and promotions from most recent to oldest. 
Include impactful tasks and projects with numbers across your work experience with the programming languages, frameworks and tools used.
Include impactful non-technical (leadership, managerial) as well as technical initiatives. 

In the Skills section, include popular languages, libraries and tools used at work by you / your team.

`,
  },
  dsmlFresherNonTech: {
    imageLink:
      'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/126/278/original/DSML_Fresher_Non-Tech_Resume.png?1747392793',
    recommendation: `The Projects section needs to be the main focus of your resume. 

Build and Include 2-3 impactful projects / elaborate business cases to showcase your technical proficiency, and analytical skills. Include relevant business insights and impact metrics in each project along with the Programming languages, frameworks and tools used to do the project.

`,
  },
  dsmlNonDeveloperAndItProfessional: {
    imageLink:
      'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/126/279/original/DSML_Non-Developer___IT_Professional.png?1747392822',
    recommendation: `The Projects section needs to be the main focus of your resume. 

Build and Include 2-3 impactful projects / elaborate business cases to showcase your technical proficiency, and analytical skills. Include relevant business insights and impact metrics in each project along with the Programming languages, frameworks and tools used to do the project.
 
In Work Experience, keep it short and include test automation / coding-type tasks with impact and tools used.
`,
  },
  dsmlDeveloper: {
    imageLink:
      'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/126/280/original/DSML_Developer_Resume.png?1747392847',
    recommendation: `Work Experience and Projects are both important components of your resume.

Build and Include 2-3 impactful projects / elaborate business cases to showcase your technical proficiency, and analytical skills. Include relevant business insights and impact metrics in each project along with the Programming languages, frameworks and tools used to do the project.


In Work Experience, Include key impactful tasks and projects with numbers across your work experience with the Programming languages, frameworks and tools used.

In the Skills section, include popular languages, libraries and tools used at work by you / your team.

Your resume should highlight your experience as a developer and ability as a data analyst - Combining Technical competence with analytical skills and understanding of businesses / business metrics across key industries.

`,
  },
  dsmlDataAnalyst: {
    imageLink:
      'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/126/281/original/DSML_Data_Analyst_Resume.png?1747392883',
    recommendation: `Work Experience needs to be the main focus of your resume. 

Include key and impactful tasks / projects with business metrics, and impact numbers across your work experience with the Programming languages, frameworks and tools used. 

In the Skills section, include popular Programming languages, libraries and tools used hands-on at work.

Include elaborate Projects or Business Cases done outside work if your tech work experience is under 2 years and you do not have enough impactful work-related items.
`,
  },
};

export const DEFAULT_TEMPLATE_CONFIG = {
  fresher: {
    sections: [
      {
        name: 'PersonalDetails',
        config: {
          view: 'view1',
        },
      },
      {
        name: 'Skills',
        config: {
          view: 'view1',
        },
      },
      {
        name: 'Experience',
        config: {
          view: 'view1',
        },
      },
      {
        name: 'Projects',
        config: {
          view: 'view1',
        },
      },
      {
        name: 'Achievements',
        config: {
          view: 'view1',
        },
      },
      {
        name: 'Education',
        config: {
          view: 'view1',
        },
      },
      {
        name: 'CustomSection',
        config: {
          view: 'view1',
        },
        page: 1,
      },
    ],
  },
};
