const PERSONAL_DETAILS_FORM_REQUIRED_FIELDS = [
  'name',
  'phone_number',
  'email',
  'gender',
  'linkedin',
];

const PROJECT_FORM_REQUIRED_FIELDS = ['title', 'project_link', 'description'];

const WORK_EXPERIENCE_FORM_REQUIRED_FIELDS = [
  'company',
  'position',
  'from',
  'to',
];

const EDUCATION_FORM_REQUIRED_FIELDS = [
  'university',
  'degree',
  'marks',
  'graduation_date',
];

const ALL_FORMS_KEYS = {
  personal_details: 'personalDetails',
  projects: 'projects',
  experience: 'experience',
  education: 'education',
  skills: 'skills',
  achievements: 'achievements',
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
