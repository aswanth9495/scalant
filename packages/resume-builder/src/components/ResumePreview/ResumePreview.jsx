import React, { useState } from 'react';
import { Flex, Button } from 'antd';
import { Document, Page, pdfjs } from 'react-pdf';
import {
  LeftOutlined,
  RightOutlined,
  LoadingOutlined,
  FileTextTwoTone,
  DownloadOutlined,
} from '@ant-design/icons';
import { useGetResumeLinkQuery } from '../../services/resumeBuilderApi';
import { downloadFile } from '../../utils/downloadUtils';
import styles from './ResumePreview.module.scss';

// Set the worker source for PDF.js
const CDN_BASE = '//cdnjs.cloudflare.com/ajax/libs/pdf.js';
const WORKER_PATH = 'pdf.worker.min.js';
// eslint-disable-next-line max-len
pdfjs.GlobalWorkerOptions.workerSrc = `${CDN_BASE}/${pdfjs.version}/${WORKER_PATH}`;

const LoadingLayout = () => <LoadingOutlined className={styles.loader} />;

const ResumePreview = ({ resumeData, resumeSelected = 'Default_Resume' }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const { data } = useGetResumeLinkQuery({
    resumeId: resumeData?.resume_details?.id,
  });

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => {
      const newPageNumber = prevPageNumber + offset;
      return Math.min(Math.max(1, newPageNumber), numPages);
    });
  };

  const previousPage = () => changePage(-1);
  const nextPage = () => changePage(1);

  const handleDownload = () => {
    downloadFile(data?.link, `${resumeSelected}.pdf`);
  };

  if (!data?.link) {
    return <LoadingLayout />;
  }

  return (
    <Flex
      vertical
      align="stretch"
      justify="center"
      className={styles.container}
    >
      <Flex className={styles.header} align="center" justify="space-between">
        <h4 className={styles.title}>
          <FileTextTwoTone className={styles.icon} />
          {resumeSelected}
        </h4>
        <Flex align="center">
          <Button
            type="text"
            icon={<LeftOutlined />}
            onClick={previousPage}
            disabled={pageNumber <= 1}
            className={styles.paginationArrow}
            size="small"
          />
          <span className={styles.paginationPageNumber}>{pageNumber}</span>
          <span className={styles.paginationSlash}>/</span>
          <span className={styles.paginationTotal}>{numPages || '--'}</span>
          <Button
            type="text"
            icon={<RightOutlined />}
            onClick={nextPage}
            disabled={pageNumber >= numPages}
            className={styles.paginationArrow}
            size="small"
          />
        </Flex>
        <Button type="primary" onClick={handleDownload}>
          <DownloadOutlined className={styles.downloadIcon} /> Download
        </Button>
      </Flex>
      <Flex align="center" justify="center">
        <Document
          file={data?.link}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<LoadingLayout />}
          className={styles.document}
        >
          <Page
            pageNumber={pageNumber}
            className={styles.page}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </Flex>
    </Flex>
  );
};

export default ResumePreview;
