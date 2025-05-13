import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initializeForm, updateFormData } from '../../store/formStoreSlice';

import { Space, Button, Flex, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ProjectFormItem from './ProjectFormItem';

import { useUpdateResumeDetailsMutation } from '../../services/resumeBuilderApi';

const FORM_ID = 'projectForm';

const initialFormData = {
  projectItems: [
    {
      id: 1,
      completed: false,
      saved: false,
      expanded: true,
      formData: {
        projectName: '',
        projectLink: '',
        projectDescription: '',
      },
    },
  ],
};

const ProjectForm = ({ onComplete, required = false }) => {
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

  // const [projectItems, setProjectItems] = useState([
  //   { id: 1, completed: false, saved: false, expanded: true },
  // ]);

  const initialValues = useMemo(
    () =>
      resumeData?.projects
        ? {
            projectItems: resumeData.projects.map((item, index) => ({
              id: index,
              completed: true,
              saved: true,
              expanded: false,
              formData: {
                projectName: item.title,
                projectLink: item.project_link,
                projectDescription: item.description,
              },
            })),
          }
        : initialFormData,
    [resumeData?.projects]
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

  const handleAddProject = () => {
    const currentItems = formData?.projectItems || [];
    const newId = currentItems.length + 1;

    dispatch(
      updateFormData({
        formId: FORM_ID,
        data: {
          projectItems: [
            ...currentItems,
            {
              id: newId,
              completed: false,
              saved: false,
              expanded: true,
              formData: {
                projectName: '',
                projectLink: '',
                projectDescription: '',
              },
            },
          ],
        },
      })
    );
  };

  const createProjectsPayload = (projectItems) => {
    return projectItems.map((item) => ({
      id: item.id,
      title: item.formData.projectName,
      description: item.formData.projectDescription,
      project_link: item.formData.projectLink,
      data_source: 'careers_hub',
      workplace_type: null,
      workplace_id: null,
      user_id: resumeData?.user_id,
    }));
  };

  const handleMarkAsCompleted = async () => {
    const projectItems = formData?.projectItems || [];
    const hasUnsavedItems = projectItems.some((item) => !item.saved);

    if (hasUnsavedItems) {
      message.error('Please save all project items before marking as complete');
      return;
    }

    const projectsPayload = createProjectsPayload(projectItems);

    try {
      const payload = {
        form_stage: 'professional_details_form',
        isPopulated: true,
        previous_experience: [],
        achievements: [],
        projects: projectsPayload,
        upgrade: false,
      };

      await updateResumeDetails({
        resumeId: resumeData?.id,
        payload,
      }).unwrap();
      message.success('Projects updated successfully');
      onComplete?.();
    } catch (error) {
      message.error(`Failed to update projects: ${error.message}`);
    }
  };

  return (
    <Flex vertical gap={16}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Flex vertical gap={16}>
          {(formData?.projectItems || []).map((item) => (
            <ProjectFormItem
              key={item.id}
              item={item}
              formId={FORM_ID}
              required={required}
            />
          ))}
        </Flex>
        <Button
          type="dashed"
          block
          icon={<PlusOutlined />}
          onClick={handleAddProject}
        >
          Add Project
        </Button>
        <Flex gap={16}>
          <Button type="primary" block onClick={handleMarkAsCompleted}>
            Mark as completed
          </Button>
          <Button type="default" block>
            Cancel
          </Button>
        </Flex>
      </Space>
    </Flex>
  );
};

export default ProjectForm;
