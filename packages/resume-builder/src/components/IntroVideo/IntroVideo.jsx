import React from 'react';
import styles from './IntroVideo.module.scss';

const BACKGROUND_IMAGE =
  'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/126/764/original/Resume_Builder_Frame_%282%29.png';
const VIDEO_URL =
  'https://ib-assessment-tests.s3.us-west-2.amazonaws.com/guide_videos/Scaler+Resume+Builder+Update.mp4';
const VIDEO_THUMBNAIL =
  'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/126/767/original/Resume_Builder_Frame_8.png';

const IntroVideo = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
      />
      <div className={styles.videoContainer}>
        <video
          src={VIDEO_URL}
          className={styles.video}
          autoPlay
          muted
          controls
          poster={VIDEO_THUMBNAIL}
        />
      </div>
    </div>
  );
};

export default IntroVideo;
