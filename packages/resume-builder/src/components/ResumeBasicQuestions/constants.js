export const getJobRoles = (program) => {
  switch (program) {
    case 'academy':
      return [
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
    case 'dsml':
      return [
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
    default:
      return [];
  }
};
