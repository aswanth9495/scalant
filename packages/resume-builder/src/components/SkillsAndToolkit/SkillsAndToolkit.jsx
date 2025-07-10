import { Button, Flex, Space, message, Modal } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useUpdateResumeDetailsMutation } from '../../services/resumeBuilderApi';
import { initializeForm, updateFormData } from '../../store/formStoreSlice';
import SkillSection from './SkillSection';
import SectionFeedback from '../SectionFeedback/SectionFeedback';

import styles from './SkillsAndToolkit.module.scss';
import { FORM_KEYS } from '../../utils/constants';
import SkillDemoVideoModal from './SkillDemoVideoModal';

const FORM_ID = 'skillsForm';

const SKILL_SECTIONS = {
  PROGRAMMING_LANGUAGES: {
    title: 'Programming Languages',
    type: 'language',
  },
  FRAMEWORKS: {
    title: 'Libraries and Frameworks',
    type: 'framework',
  },
  TOOLS: {
    title: 'Tools, databases, version control and everything else:',
    type: 'tools',
  },
};

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
  const reviewData = useSelector(
    (state) => state.scalantResumeBuilder.resumeReview.reviewData
  );
  const skillsFeedback = useMemo(() => {
    return reviewData?.resume_evaluation_result?.section_feedback?.skills || [];
  }, [reviewData]);

  const { incompleteForms, currentIncompleteForm } = useSelector(
    (state) => state.scalantResumeBuilder.resumeForms
  );
  const markComplete =
    incompleteForms.length === 0 ||
    (incompleteForms.length <= 1 && currentIncompleteForm === FORM_KEYS.skills);
  const { resume_builder_skills: resumeBuilderSkills, skill_data: skillsData } =
    useSelector((state) => state.scalantResumeBuilder.metaData.meta);

  const [updateResumeDetails, { isLoading }] = useUpdateResumeDetailsMutation();

  const initialValues = useMemo(
    () =>
      resumeData?.skills
        ? {
            selectedSkills: resumeData.skills.filter((skill) =>
              skillsData.some((data) => data.subtopic_id === skill.skill_id)
            ),
          }
        : initialFormData,
    [resumeData?.skills, skillsData]
  );

  const handleFinish = async () => {
    const selectedSkills = formData?.selectedSkills || [];

    try {
      const payload = {
        form_stage: 'skills_details_form',
        skills: selectedSkills,
        mark_complete: markComplete,
      };

      await updateResumeDetails({
        resumeId: resumeData?.resume_details?.id,
        payload,
      }).unwrap();
      message.success('Skills and toolkit updated successfully');
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      message.error('Failed to update skills and toolkit');
    }
  };

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

  const handleTagClick = () => {};

  const handleExperienceUpdate = (skill, years, months) => {
    const selectedSkills = formData?.selectedSkills || [];
    const selectedSkill = selectedSkills.find(
      (s) => s.skill_id === skill.subtopic_id
    );

    if (selectedSkill) {
      // Update existing skill experience
      const updatedSelectedSkills = selectedSkills.map((s) => {
        if (s.skill_id === skill.subtopic_id) {
          return {
            ...s,
            proficiency_period: {
              years,
              months,
            },
          };
        }
        return s;
      });

      dispatch(
        updateFormData({
          formId: FORM_ID,
          data: {
            selectedSkills: updatedSelectedSkills,
          },
        })
      );
    } else {
      // Create new skill with experience
      const newSkill = {
        skill_id: skill.subtopic_id,
        skill_type: 'SubTopic',
        name: skill.subtopic,
        proficiency_period: {
          years,
          months,
        },
      };

      dispatch(
        updateFormData({
          formId: FORM_ID,
          data: {
            selectedSkills: [...selectedSkills, newSkill],
          },
        })
      );
    }
  };

  const handleSaveAndCompile = () => {
    onComplete?.(true);
    handleFinish();
  };

  const handleSaveAndNext = () => {
    onComplete?.();
    handleFinish();
  };

  const renderSkillSection = (section) => {
    const { title, type } = section;
    const filteredSkills = skillsData.filter((skill) =>
      resumeBuilderSkills[type].includes(skill.subtopic_id)
    );

    return (
      <SkillSection
        key={type}
        title={title}
        skills={filteredSkills}
        selectedSkills={formData?.selectedSkills || []}
        onSkillClick={handleTagClick}
        onExperienceUpdate={handleExperienceUpdate}
        skillExperience={formData?.skillExperience || {}}
        formId={FORM_ID}
      />
    );
  };

  return (
    <Space direction="vertical" size={24} className={styles.container}>
      <SectionFeedback feedbackData={skillsFeedback} />
      <SkillDemoVideoModal />
      {Object.values(SKILL_SECTIONS).map(renderSkillSection)}
      <Flex gap={16}>
        <Button
          type="primary"
          block
          onClick={handleSaveAndCompile}
          disabled={isLoading}
        >
          Save and Compile
        </Button>
        <Button
          type="default"
          block
          onClick={handleSaveAndNext}
          disabled={isLoading}
        >
          Save and Next
        </Button>
      </Flex>
    </Space>
  );
};

export default SkillsAndToolkit;
