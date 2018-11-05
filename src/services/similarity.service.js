import axios from "axios";

/**
 * Call API_ENDPOINT to get similarity matching result
 * 
 * @param  {string} END_POINT
 * @param  {number} fileIndex
 * @param  {number} rowID
 * @param  {string} columns
 */
export const similarityService = (END_POINT, fileIndex, rowID, columns) => {
  return axios
    .get(
      END_POINT +
      "/similarity/" +
      fileIndex +
      "/" +
      rowID +
      "?columns=" +
      columns.toString()
    )
    .then(response => response.data)
    .catch(err => console.error(err));
};
