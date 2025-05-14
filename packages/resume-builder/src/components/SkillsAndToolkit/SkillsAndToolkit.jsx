import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Space, message } from 'antd';
import SkillSection from './SkillSection';
import {
  PROGRAMMING_LANGUAGES,
  LIBRARIES_FRAMEWORKS,
  TOOLS,
} from './constants';
import styles from './SkillsAndToolkit.module.scss';
import { useUpdateResumeDetailsMutation } from '../../services/resumeBuilderApi';
import { initializeForm, updateFormData } from '../../store/formStoreSlice';

const FORM_ID = 'skillsForm';

const initialFormData = {
  selectedSkills: [],
  skillExperience: {},
};

const SkillsAndToolkit = ({ onComplete }) => {
  const dispatch = useDispatch();
  const resumeData = useSelector(
    (state) => state.scalantResumeBuilder.resumeBuilder.resumeData
  );
  const formData = useSelector(
    (state) => state.scalantResumeBuilder.formStore.forms[FORM_ID]
  );
  const isFormInitialized = useSelector(
    (state) => state.scalantResumeBuilder.formStore.initializedForms[FORM_ID]
  );
  const [updateResumeDetails] = useUpdateResumeDetailsMutation();

  const initialValues = useMemo(
    () =>
      resumeData?.skills
        ? {
            selectedSkills: resumeData.skills.map((skill) => skill.name),
            skillExperience: resumeData.skills.reduce((acc, skill) => {
              acc[skill.name] = skill.proficiency_period;
              return acc;
            }, {}),
          }
        : initialFormData,
    [resumeData?.skills]
  );

  useEffect(() => {
    if (!isFormInitialized) {
      dispatch(
        initializeForm({
          formId: FORM_ID,
          initialData: initialValues,
        })
      );
    }
  }, [dispatch, isFormInitialized, initialValues]);

  const handleTagClick = (skill) => {
    const skillKey = skill.name;
    const currentSelectedSkills = formData?.selectedSkills || [];
    const currentSkillExperience = formData?.skillExperience || {};

    if (currentSelectedSkills.includes(skillKey)) {
      const updatedSelectedSkills = currentSelectedSkills.filter(
        (s) => s !== skillKey
      );
      const updatedExperience = { ...currentSkillExperience };
      delete updatedExperience[skillKey];

      dispatch(
        updateFormData({
          formId: FORM_ID,
          data: {
            selectedSkills: updatedSelectedSkills,
            skillExperience: updatedExperience,
          },
        })
      );
    } else {
      dispatch(
        updateFormData({
          formId: FORM_ID,
          data: {
            selectedSkills: [...currentSelectedSkills, skillKey],
          },
        })
      );
    }
  };

  const handleExperienceUpdate = (skillName, years, months) => {
    const currentSkillExperience = formData?.skillExperience || {};

    dispatch(
      updateFormData({
        formId: FORM_ID,
        data: {
          skillExperience: {
            ...currentSkillExperience,
            [skillName]: {
              years,
              months,
            },
          },
        },
      })
    );
  };

  const handleMarkAsComplete = async () => {
    const selectedSkills = formData?.selectedSkills || [];
    const skillExperience = formData?.skillExperience || {};

    const allSelectedSkills = selectedSkills.map((skill) => ({
      name: skill,
      experience: skillExperience[skill] || {
        years: 0,
        months: 0,
      },
    }));

    try {
      const payload = {
        form_stage: 'skills_and_toolkit_form',
        skills: allSelectedSkills,
      };
      onComplete?.();

      await updateResumeDetails({
        resumeId: resumeData?.resume_details?.id,
        payload,
      }).unwrap();
      message.success('Skills and toolkit updated successfully');
    } catch (error) {
      message.error('Failed to update skills and toolkit');

      console.error('Error updating skills and toolkit:', error);
    }
  };

  return (
    <Space direction="vertical" size={24} className={styles.container}>
      <SkillSection
        title="Programming Languages"
        skills={PROGRAMMING_LANGUAGES}
        selectedSkills={formData?.selectedSkills || []}
        onSkillClick={handleTagClick}
        onExperienceUpdate={handleExperienceUpdate}
        skillExperience={formData?.skillExperience || {}}
      />

      <SkillSection
        title="Libraries and Framework"
        skills={LIBRARIES_FRAMEWORKS}
        selectedSkills={formData?.selectedSkills || []}
        onSkillClick={handleTagClick}
        onExperienceUpdate={handleExperienceUpdate}
        skillExperience={formData?.skillExperience || {}}
      />

      <SkillSection
        title="Tools, databases, version control and everything else:"
        skills={TOOLS}
        selectedSkills={formData?.selectedSkills || []}
        onSkillClick={handleTagClick}
        onExperienceUpdate={handleExperienceUpdate}
        skillExperience={formData?.skillExperience || {}}
      />

      <div className={styles.buttonContainer}>
        <button
          className={`${styles.button} ${styles.primary}`}
          onClick={handleMarkAsComplete}
        >
          Mark as Complete
        </button>
        <button className={`${styles.button} ${styles.secondary}`}>
          Cancel
        </button>
      </div>
    </Space>
  );
};

export default SkillsAndToolkit;
