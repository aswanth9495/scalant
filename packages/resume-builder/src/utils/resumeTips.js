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

const RESUME_PERSONAS = {
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

export const getResumeTips = (resumeQuestionsData) => {
  const { techExperience, program, currentJobRole } = resumeQuestionsData;
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
