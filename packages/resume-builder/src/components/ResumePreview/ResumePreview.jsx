import React from 'react';
import { useSelector } from 'react-redux';
import { Flex, FloatButton, Tooltip } from 'antd';
import {
  DeleteOutlined,
  ExportOutlined,
  FontSizeOutlined,
  EditOutlined,
} from '@ant-design/icons';

import ResumeDropdown from './ResumeDropdown';
import { useGetResumeLinkQuery } from '../../services/resumeBuilderApi';
import PdfPreview from '../PdfPreview';

import styles from './ResumePreview.module.scss';

const TOOLTIPS = {
  AI_EVALUATOR: 'Use our AI resume evaluator',
  FONT_SIZE: 'Change Font Size',
  EDIT: 'Edit Resume',
  DELETE: 'Delete Resume',
  DELETE_DISABLED: 'Cannot delete default resume',
};

const ResumePreview = ({
  onFontSizeClick,
  onEditClick,
  onDeleteClick,
  onAddResumeClick,
  onManageResumesClick,
  resumeList,
  onResumeClick,
}) => {
  const resumeData = useSelector(
    (state) => state.scalantResumeBuilder.resumeBuilder.resumeData
  );
  const { data, isLoading, isFetching, isError } = useGetResumeLinkQuery({
    resumeId: resumeData?.resume_details?.id || 1,
  });

  const isDefaultResume = resumeList.find(
    (resume) => resume.id === resumeData?.resume_details?.id
  )?.default;

  return (
    <Flex align="flex-start" className={styles.container}>
      <PdfPreview
        pdfLink={data?.link}
        selectedResume={
          <ResumeDropdown
            onAddResumeClick={onAddResumeClick}
            onManageResumesClick={onManageResumesClick}
            resumeList={resumeList}
            onResumeClick={onResumeClick}
            selectedResumeId={resumeData?.resume_details?.id}
          />
        }
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
      />
      <Flex vertical>
        <FloatButton.Group shape="square" className={styles.floatButtonGroup}>
          <Tooltip title={TOOLTIPS.AI_EVALUATOR} placement="right">
            <FloatButton
              icon={<ExportOutlined />}
              onClick={() =>
                // eslint-disable-next-line no-undef
                window.open('https://google.com', '_blank')
              }
            />
          </Tooltip>
          {/* TODO: Add the functionality for font size */}
          <Tooltip title={TOOLTIPS.FONT_SIZE} placement="right">
            <FloatButton
              onClick={onFontSizeClick}
              icon={<FontSizeOutlined />}
            />
          </Tooltip>
          <Tooltip title={TOOLTIPS.EDIT} placement="right">
            <FloatButton onClick={onEditClick} icon={<EditOutlined />} />
          </Tooltip>
          <Tooltip
            title={isDefaultResume ? TOOLTIPS.DELETE_DISABLED : TOOLTIPS.DELETE}
            placement="right"
          >
            <FloatButton
              onClick={onDeleteClick}
              icon={<DeleteOutlined />}
              disabled={isDefaultResume}
              className={isDefaultResume ? styles.disabledButton : ''}
            />
          </Tooltip>
        </FloatButton.Group>
      </Flex>
    </Flex>
  );
};

export default ResumePreview;
