import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Space, Button, Flex, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ProjectFormItem from './ProjectFormItem';

import { useUpdateResumeDetailsMutation } from '../../services/resumeBuilderApi';

const ProjectForm = ({ onComplete, required = false }) => {
  const [projectItems, setProjectItems] = useState([
    { id: 1, completed: false, saved: false, expanded: true },
  ]);

  const resumeData = useSelector((state) => state.resumeBuilder.resumeData);
  const [updateResumeDetails] = useUpdateResumeDetailsMutation();

  useEffect(() => {
    if (resumeData?.projects) {
      setProjectItems(
        resumeData.projects.map((item, index) => ({
          id: index,
          completed: true,
          saved: true,
          expanded: false,
          formData: {
            projectName: item.title,
            projectLink: item.project_link,
            projectDescription: item.description,
          },
        }))
      );
    }
  }, [resumeData?.projects]);

  const handleAddProject = () => {
    setProjectItems([
      ...projectItems,
      {
        id: projectItems.length + 1,
        completed: false,
        saved: false,
        expanded: true,
      },
    ]);
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
        formStage: 'professional-details',
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
          {projectItems.map((item) => (
            <ProjectFormItem
              key={item.id}
              item={item}
              setProjectItems={setProjectItems}
              projectItems={projectItems}
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
