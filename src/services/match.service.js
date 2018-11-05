import axios from "axios";

/**
 * Call API_ENDPOINT to get matching result
 * 
 * @param  {string} END_POINT
 * @param  {string} matchingColumns
 */
export const matchService = (END_POINT, matchingColumns) => {
  return axios
    .get(END_POINT + "/match?columns=" + matchingColumns.toString())
    .then(response => response.data)
    .catch(err => console.error(err));
};
