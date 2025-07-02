import React from 'react';
import { useSelector } from 'react-redux';
import { Flex, FloatButton, Tooltip } from 'antd';
import {
  DeleteOutlined,
  EditOutlined,
  FilePdfOutlined,
  LikeOutlined,
} from '@ant-design/icons';

import FontSizeDropdown from './FontSizeDropdown';
import ResumeDropdown from './ResumeDropdown';
import { useGetResumeLinkQuery } from '../../services/resumeBuilderApi';
import { getSampleResume } from '../../utils/sampleResumeUtils';
import PdfPreview from '../PdfPreview';

import styles from './ResumePreview.module.scss';

const TOOLTIPS = {
  AI_EVALUATOR: 'AI Resume Review',
  FONT_SIZE: 'Change Font Size',
  EDIT: 'Rename Resume',
  DELETE: 'Delete Resume',
  DELETE_DISABLED: 'Cannot delete default resume',
  SAMPLE_RESUME: 'View Sample Resume',
  FEEDBACK: 'Share Feedback',
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
  const userEmail = resumeData?.personal_details?.email;
  const { data, isLoading, isFetching, isError } = useGetResumeLinkQuery({
    resumeId: resumeData?.resume_details?.id || 1,
  });
  const resumePersonaData = useSelector(
    (state) => state.scalantResumeBuilder.formStore.forms.basicQuestions
  );
  const program = useSelector(
    (state) => state.scalantResumeBuilder.resumeBuilder.program
  );

  const isDefaultResume = resumeList.find(
    (resume) => resume.id === resumeData?.resume_details?.id
  )?.default;

  const getSampleResumeLink = () => {
    if (resumePersonaData) {
      const { pdfLink } = getSampleResume(
        resumePersonaData.currentJobRole,
        resumePersonaData.techExperience,
        program
      );

      // eslint-disable-next-line no-undef
      window.open(pdfLink, '_blank');
    }
  };

  // const handleAiEvaluatorClick = useCallback(async () => {
  //   try {
  //     const response = await getResumeReview({
  //       resumeId: resumeData?.resume_details?.id,
  //     });

  //     if (response?.data?.url) {
  //       message.success(AI_REVIEW_MESSAGES.SUCCESS);
  //       // eslint-disable-next-line no-undef
  //       setTimeout(() => {
  //         // eslint-disable-next-line no-undef
  //         window.open(response.data.url, '_blank');
  //       }, 2000);
  //     } else {
  //       message.error(AI_REVIEW_MESSAGES.ERROR);
  //     }
  //   } catch {
  //     message.error(AI_REVIEW_MESSAGES.ERROR);
  //   }
  // }, [getResumeReview, resumeData]);

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
      {!isLoading && !isFetching && !isError && (
        <Flex vertical>
          <FloatButton.Group shape="square" className={styles.floatButtonGroup}>
            <FontSizeDropdown onFontSizeChange={onFontSizeClick} />
            <Tooltip title={TOOLTIPS.EDIT} placement="right">
              <FloatButton onClick={onEditClick} icon={<EditOutlined />} />
            </Tooltip>
            <Tooltip
              title={
                isDefaultResume ? TOOLTIPS.DELETE_DISABLED : TOOLTIPS.DELETE
              }
              placement="right"
            >
              <FloatButton
                onClick={onDeleteClick}
                icon={<DeleteOutlined />}
                disabled={isDefaultResume}
                className={isDefaultResume ? styles.disabledButton : ''}
              />
            </Tooltip>
            <Tooltip title={TOOLTIPS.SAMPLE_RESUME} placement="right">
              <FloatButton
                icon={<FilePdfOutlined />}
                onClick={() => getSampleResumeLink()}
              />
            </Tooltip>
            <Tooltip title={TOOLTIPS.FEEDBACK} placement="right">
              <FloatButton
                icon={<LikeOutlined />}
                href={`https://interviewbit.typeform.com/to/MTZOE7Pt?email=${userEmail}`}
                target="_blank"
              />
            </Tooltip>
          </FloatButton.Group>
        </Flex>
      )}
    </Flex>
  );
};

export default ResumePreview;
