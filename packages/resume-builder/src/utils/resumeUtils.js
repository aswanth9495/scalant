import { ADDITIONAL_PROFILES } from './constants';

export const getResumeProgram = (courseProduct) => {
  if (courseProduct === 'data_science') {
    return 'dsml';
  }
  return 'academy';
};

export const formatExperience = (years, months, shortFormat = false) => {
  const yearLabel = shortFormat ? 'yrs' : 'years';
  const monthLabel = shortFormat ? 'Mon' : 'months';

  if (years === 0) {
    return `${months} ${monthLabel}`;
  }
  if (months === 0) {
    return `${years} ${yearLabel}`;
  }
  return `${years} ${yearLabel} ${months} ${monthLabel}`;
};

export const getAdditionalProfileUrl = (userData) => {
  const additionalProfiles = [];
  let profileIndex = 0;

  // Check each profile type defined in ADDITIONAL_PROFILES
  ADDITIONAL_PROFILES.forEach((profile) => {
    const profileType = profile.value;
    const profileUrl = userData[profileType];

    // If user has this profile type with a URL value
    if (profileUrl) {
      // Create an object with indexed keys for the form fields
      additionalProfiles.push({
        [`profileType${profileIndex}`]: profileType,
        [`profileUrl${profileIndex}`]: profileUrl,
      });

      profileIndex++;
    }
  });

  return additionalProfiles;
};

export const getExistingProfileTypes = (formValues) => {
  const existingTypes = [];

  Object.keys(formValues)
    .filter((key) => key.startsWith('profileType'))
    .forEach((key) => {
      const profileType = formValues[key];
      if (profileType) {
        existingTypes.push(profileType);
      }
    });

  return existingTypes;
};

export const getAvailableProfileTypes = (
  formValues,
  currentProfileIndex = null
) => {
  const existingTypes = [];

  // Collect all profile types except the current one
  Object.keys(formValues)
    .filter((key) => key.startsWith('profileType'))
    .forEach((key) => {
      const index = parseInt(key.replace('profileType', ''), 10);
      if (currentProfileIndex === null || index !== currentProfileIndex) {
        const profileType = formValues[key];
        if (profileType) {
          existingTypes.push(profileType);
        }
      }
    });

  // Filter out profile types that are already in use
  const availableTypes = ADDITIONAL_PROFILES.filter(
    (profile) => !existingTypes.includes(profile.value)
  );

  // If we're filtering for a specific profile, include its current type
  if (currentProfileIndex !== null) {
    const currentType = formValues[`profileType${currentProfileIndex}`];
    if (
      currentType &&
      !availableTypes.some((opt) => opt.value === currentType)
    ) {
      availableTypes.push(
        ADDITIONAL_PROFILES.find((p) => p.value === currentType)
      );
    }
  }

  return availableTypes;
};

export const createProfilePayload = (formValues, basePayload = {}) => {
  const payload = { ...basePayload };

  // Use additionalProfiles array instead of top-level keys
  if (
    formValues.additionalProfiles &&
    Array.isArray(formValues.additionalProfiles)
  ) {
    formValues.additionalProfiles.forEach((profileObj) => {
      // Find profileType and profileUrl keys in each object
      const profileTypeKey = Object.keys(profileObj).find((key) =>
        key.startsWith('profileType')
      );
      const profileUrlKey = Object.keys(profileObj).find((key) =>
        key.startsWith('profileUrl')
      );

      if (profileTypeKey) {
        const profileType = profileObj[profileTypeKey];
        const profileUrl = profileObj[profileUrlKey];

        if (profileType) {
          payload[profileType] = profileUrl;
        }
      }
    });
  }

  return payload;
};
