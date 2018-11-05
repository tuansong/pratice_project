import axios from "axios";

/**
 * CALL API_ENPOINT to upload file
 * 
 * @param  {string} END_POINT
 * @param  {string} saveAsName
 * @param  {object} formData
 * @param  {object} options
 */
export const uploadFileService = (
  END_POINT,
  saveAsName,
  formData,
  options
) => {
  return axios
    .post(END_POINT + "/upload/" + saveAsName, formData, options)
    .then(response => {
      return response.data;
    })
    .catch(err => console.error(err));
};
