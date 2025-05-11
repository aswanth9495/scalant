import React, { useState } from 'react';
import { Flex, Button, Empty } from 'antd';
import { Document, Page, pdfjs } from 'react-pdf';
import {
  LeftOutlined,
  RightOutlined,
  LoadingOutlined,
  FileTextTwoTone,
  DownloadOutlined,
} from '@ant-design/icons';
import { downloadFile } from '../../utils/downloadUtils';

import styles from './PdfPreview.module.scss';

// Set the worker source for PDF.js
const CDN_BASE = '//cdnjs.cloudflare.com/ajax/libs/pdf.js';
const WORKER_PATH = 'pdf.worker.min.js';
// eslint-disable-next-line max-len
pdfjs.GlobalWorkerOptions.workerSrc = `${CDN_BASE}/${pdfjs.version}/${WORKER_PATH}`;

const MESSAGES = {
  loading: {
    initial: 'Loading your resume preview...',
    refreshing: 'Refreshing your resume preview...',
  },
  error: {
    preview: 'Error loading resume preview',
  },
};

const LoadingLayout = ({ message = MESSAGES.loading.initial }) => (
  <Flex
    vertical
    align="center"
    justify="center"
    className={styles.loadingContainer}
  >
    <LoadingOutlined className={styles.loader} />
    <span className={styles.loadingText}>{message}</span>
  </Flex>
);

const PdfPreview = ({
  pdfLink,
  selectedResume,
  isLoading = false,
  isFetching = false,
  isError = false,
}) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

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
    downloadFile(pdfLink, `resume.pdf`);
  };

  // Show loading state for initial load or refetching
  if (isLoading || isFetching || !pdfLink) {
    return (
      <LoadingLayout
        message={
          isLoading ? MESSAGES.loading.initial : MESSAGES.loading.refreshing
        }
      />
    );
  }

  // Show error state if needed
  if (isError) {
    return (
      <Flex
        vertical
        align="center"
        justify="center"
        className={styles.loadingContainer}
      >
        <Empty
          description={MESSAGES.error.preview}
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      </Flex>
    );
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
          {selectedResume}
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
          file={pdfLink}
          className={styles.document}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<LoadingLayout message="Loading PDF document..." />}
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

export default PdfPreview;
