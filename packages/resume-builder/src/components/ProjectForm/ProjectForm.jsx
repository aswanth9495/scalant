import React, { useState } from 'react';
import { Space, Button, Flex, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ProjectFormItem from './ProjectFormItem';

const ProjectForm = () => {
  const [projectItems, setProjectItems] = useState([
    { id: 1, completed: false, saved: false, expanded: true },
  ]);

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

  const handleMarkAsCompleted = () => {
    const hasUnsavedItems = projectItems.some((item) => !item.saved);

    if (hasUnsavedItems) {
      message.error('Please save all project items before marking as complete');
      return;
    }

    const projectData = projectItems
      .filter((item) => item.saved)
      .map((item) => {
        const formData = item.formData || {};

        return {
          id: item.id,
          saved: item.saved,
          projectName: formData[`project_${item.id}_projectName`],
          projectDescription: formData[`project_${item.id}_projectDescription`],
          projectLink: formData[`project_${item.id}_projectLink`],
          projectToolsTech: formData[`project_${item.id}_projectToolsTech`],
        };
      });

    // eslint-disable-next-line no-console, no-undef
    console.log(projectData);
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
