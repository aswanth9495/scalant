/* eslint-disable no-undef */
/**
 * Downloads a file from a URL in the background
 * @param {string} url - The URL of the file to download
 * @param {string} filename - The name to save the file as
 * @returns {Promise<void>}
 */
export const downloadFile = async (url, filename) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const objectUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = objectUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(objectUrl);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error downloading file:', error);
    throw error;
  }
};
