import { API_URL } from "../constant";

/**
 * 
 * @param param0 
 * @returns 
 */
const fetchData = ({headers = {"content-type": "application/json"}, method = 'GET', body = '', queryParams = ''}) => {
  const apiUrl = queryParams ? `${API_URL}?${queryParams}`: API_URL;
  return new Request(apiUrl, {
    method,
    headers,
    body
  })

}

export default fetchData;