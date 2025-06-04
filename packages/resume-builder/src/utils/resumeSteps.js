import {
  UserOutlined,
  ToolOutlined,
  FileTextOutlined,
  BookOutlined,
  RiseOutlined,
  FormOutlined,
} from '@ant-design/icons';
import PersonalInfoAndSocial from '../components/PersonalInfoAndSocial';
import SkillsAndToolkit from '../components/SkillsAndToolkit';
import ProjectForm from '../components/ProjectForm';
import EducationForm from '../components/EducationForm';
import WorkExperienceForm from '../components/WorkExperienceForm';
import CustomForm from '../components/CustomForm';
import React from 'react';
import {
  PROJECT_FORM_REQUIRED_FIELDS,
  PERSONAL_DETAILS_FORM_REQUIRED_FIELDS,
  WORK_EXPERIENCE_FORM_REQUIRED_FIELDS,
  EDUCATION_FORM_REQUIRED_FIELDS,
} from './constants';

const ALL_FORMS_KEYS = {
  personal_details: 'personalDetails',
  projects: 'projects',
  experience: 'experience',
  education: 'education',
  skills: 'skills',
  achievements: 'achievements',
};

const FORM_STEPS = [
  {
    key: 'personalDetails',
    title: 'Personal Info and Socials',
    subtitle: 'Lets get to know you! Fill in your personal details',
    icon: UserOutlined,
    component: PersonalInfoAndSocial,
  },
  {
    key: 'skills',
    title: 'Skills and Toolset',
    subtitle: 'Select from these industry-standard skills and tools',
    icon: ToolOutlined,
    component: SkillsAndToolkit,
  },
  {
    key: 'projects',
    title: 'Projects',
    subtitle: 'Add personal projects',
    icon: FileTextOutlined,
    component: ProjectForm,
  },
  {
    key: 'education',
    title: 'Education',
    subtitle: 'Add academic background and certifications',
    icon: BookOutlined,
    component: EducationForm,
  },
  {
    key: 'experience',
    title: 'Work Experience',
    subtitle: 'Add details about jobs and internships',
    icon: RiseOutlined,
    component: WorkExperienceForm,
  },
  {
    key: 'achievements',
    title: 'Achievements',
    subtitle: 'Add your achievements',
    icon: FormOutlined,
    component: CustomForm,
  },
];

const STEP_ORDERS = {
  ACADEMY_FRESHER: {
    order: [
      'personalDetails',
      'skills',
      'projects',
      'education',
      'experience',
      'achievements',
    ],
    requiredForms: ['personalDetails', 'skills', 'projects', 'education'],
  },
  ACADEMY_QA_AND_SALESFORCE: {
    order: [
      'personalDetails',
      'skills',
      'projects',
      'experience',
      'education',
      'achievements',
    ],
    requiredForms: [
      'personalDetails',
      'skills',
      'projects',
      'experience',
      'education',
    ],
  },
  ACADEMY_EXCEPT_ENGINEERING: {
    order: [
      'personalDetails',
      'skills',
      'experience',
      'projects',
      'education',
      'achievements',
    ],
    requiredForms: ['personalDetails', 'skills', 'experience', 'education'],
  },
  ACADEMY_ENGINEERING: {
    order: [
      'personalDetails',
      'skills',
      'experience',
      'projects',
      'education',
      'achievements',
    ],
    requiredForms: ['personalDetails', 'skills', 'experience', 'education'],
  },
  DSML_FRESHER: {
    order: [
      'personalDetails',
      'skills',
      'projects',
      'experience',
      'education',
      'achievements',
    ],
    requiredForms: ['personalDetails', 'skills', 'projects', 'education'],
  },
  DSML_NON_DEV_IT_PROFESSIONAL: {
    order: [
      'personalDetails',
      'skills',
      'projects',
      'experience',
      'education',
      'achievements',
    ],
    requiredForms: [
      'personalDetails',
      'skills',
      'projects',
      'experience',
      'education',
    ],
  },
  DSML_DEVELOPER: {
    order: [
      'personalDetails',
      'skills',
      'projects',
      'experience',
      'education',
      'achievements',
    ],
    requiredForms: [
      'personalDetails',
      'skills',
      'projects',
      'experience',
      'education',
    ],
  },
  DSML_DATA_ML_ENGINEER: {
    order: [
      'personalDetails',
      'skills',
      'experience',
      'projects',
      'education',
      'achievements',
    ],
    requiredForms: ['personalDetails', 'skills', 'experience', 'education'],
  },
};

const getFormOrderDetails = (program, currentJobRole) => {
  if (
    program === 'academy' &&
    ['Fresher', 'Non- Tech'].includes(currentJobRole)
  ) {
    return STEP_ORDERS.ACADEMY_FRESHER;
  } else if (
    program === 'academy' &&
    [
      'Quality Assurance / SDE in Testing',
      'Salesforce / Servicenow / RPA',
    ].includes(currentJobRole)
  ) {
    return STEP_ORDERS.ACADEMY_QA_AND_SALESFORCE;
  } else if (
    program === 'academy' &&
    [
      'Embedded Systems Engineer',
      'Mobile Engineer',
      'Frontend/Full-stack',
      'Backend / Backend Heavy Full-stack',
      'DevOps / Network Engineer',
      'Data Engineer',
    ].includes(currentJobRole)
  ) {
    return STEP_ORDERS.ACADEMY_EXCEPT_ENGINEERING;
  } else if (
    program === 'academy' &&
    currentJobRole === 'Engineering Leadership'
  ) {
    return STEP_ORDERS.ACADEMY_ENGINEERING;
  } else if (
    program === 'dsml' &&
    ['Fresher', 'Non- Tech'].includes(currentJobRole)
  ) {
    return STEP_ORDERS.DSML_FRESHER;
  } else if (
    program === 'dsml' &&
    currentJobRole === 'Non-Developer & IT Professional'
  ) {
    return STEP_ORDERS.DSML_NON_DEV_IT_PROFESSIONAL;
  } else if (program === 'dsml' && currentJobRole === 'Developer') {
    return STEP_ORDERS.DSML_DEVELOPER;
  } else if (
    program === 'dsml' &&
    [
      'Data Analyst / Business Analyst',
      'Data Scientist / Machine Learning Engineer',
    ].includes(currentJobRole)
  ) {
    return STEP_ORDERS.DSML_DATA_ML_ENGINEER;
  } else {
    return STEP_ORDERS.DSML_FRESHER;
  }
};

const getRequiredFields = (formKey) => {
  switch (formKey) {
    case 'personal_details':
      return PERSONAL_DETAILS_FORM_REQUIRED_FIELDS;
    case 'projects':
      return PROJECT_FORM_REQUIRED_FIELDS;
    case 'experience':
      return WORK_EXPERIENCE_FORM_REQUIRED_FIELDS;
    case 'education':
      return EDUCATION_FORM_REQUIRED_FIELDS;
    default:
      return [];
  }
};

export const getAllIncompleteForms = (resumeData) => {
  const incompleteForms = [];

  Object.keys(ALL_FORMS_KEYS).forEach((key) => {
    const formKey = ALL_FORMS_KEYS[key];
    const formData = resumeData[key];

    // Skip if form data doesn't exist or is empty
    if (!formData) {
      incompleteForms.push(formKey);
      return;
    }

    const requiredFields = getRequiredFields(key);

    // Handle array-type forms (projects, education, experience)
    if (Array.isArray(formData)) {
      if (formData.length === 0) {
        incompleteForms.push(formKey);
        return;
      }

      const hasIncompleteItems = formData.some((item) => {
        return requiredFields.some((field) => {
          const value = item[field];
          return (
            !Object.prototype.hasOwnProperty.call(item, field) ||
            value === null ||
            value === undefined ||
            value === '' ||
            (Array.isArray(value) && value.length === 0) ||
            (typeof value === 'object' && Object.keys(value).length === 0)
          );
        });
      });

      if (hasIncompleteItems) {
        incompleteForms.push(formKey);
      }
    } else {
      // Handle object-type forms (personal_details)
      const missingFields = requiredFields.filter((field) => {
        const value = formData[field];
        return (
          !Object.prototype.hasOwnProperty.call(formData, field) ||
          value === null ||
          value === undefined ||
          value === '' ||
          (Array.isArray(value) && value.length === 0) ||
          (typeof value === 'object' && Object.keys(value).length === 0)
        );
      });

      if (missingFields.length > 0) {
        incompleteForms.push(formKey);
      }
    }
  });

  return incompleteForms;
};

export const getFormSteps = (
  resumePersonaData,
  incompleteForms,
  onComplete,
  program
) => {
  if (!resumePersonaData) return [];

  const { currentJobRole } = resumePersonaData;

  const formOrderDetails = getFormOrderDetails(program, currentJobRole);

  // Determine which step order to use
  const stepOrder = formOrderDetails.order;
  const requiredForms = formOrderDetails.requiredForms;

  // Create ordered steps based on the determined order
  const orderedSteps = stepOrder
    .map((key) => {
      const step = FORM_STEPS.find((s) => s.key === key);
      if (!step) return null;

      // Determine if the step is required
      let isRequired = false;
      if (requiredForms.includes(key)) {
        isRequired = true;
      }
      return {
        ...step,
        status: incompleteForms.includes(key) ? 'incomplete' : 'complete',
        required: isRequired,
        component: React.createElement(step.component, {
          onComplete,
          required: isRequired,
        }),
      };
    })
    .filter(Boolean);

  return orderedSteps;
};
