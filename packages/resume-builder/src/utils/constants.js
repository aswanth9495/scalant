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
