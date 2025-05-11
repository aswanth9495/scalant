import React from 'react';

import { useGetResumeLinkQuery } from '../../services/resumeBuilderApi';
import PdfPreview from '../PdfPreview';

const ResumePreview = ({ resumeData, resumeSelected = 'Default_Resume' }) => {
  const { data, isLoading, isFetching, isError } = useGetResumeLinkQuery({
    resumeId: resumeData?.resume_details?.id,
  });

  return (
    <PdfPreview
      pdfLink={data?.link}
      selectedResume={resumeSelected}
      isLoading={isLoading}
      isFetching={isFetching}
      isError={isError}
    />
  );
};

export default ResumePreview;
