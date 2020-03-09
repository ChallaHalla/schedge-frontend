import fetch from "node-fetch";

const makeRequest = (url, data = { method: "GET", params: {} }) => new Promise((resolve, reject) => {
  url = new URL(url);
  Object.keys(data.params).forEach((key) => url.searchParams.append(key, data.params[key]));
  fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: data.method,
    body: JSON.stringify(data.body),
  })
    .then((res) => {
      res.json().then((json) => {
        resolve(json);
      });
    })
    .catch((err) => {
      console.log(err);
      console.log("in the catch!");
      reject(err);
    });
});
const SCHEDGE_API = `https://schedge.torchnyu.com`;
export const getSchools = (requestData) => {
  // /schools
  const url = `${SCHEDGE_API}/schools`;
  return makeRequest(url);
};

export const getSchoolSubjects = (requestData) => {
  // /subjects/school
  const url = `${SCHEDGE_API}/subjects`;
  const params = { school: requestData.school_id };
  return makeRequest(url, { params });
};

export const getSubjectCourses = (requestData) => {
  //  /{year}/{semester}/{school}/{subject}
  const url = `${SCHEDGE_API}/${requestData.year_id}/${requestData.semester_id}/${requestData.school_id}/${requestData.subject_id}`;
  return makeRequest(url);
};

export const getSearch = (requestData) => {
  // /{year}/{semester}/search
  //
  const url = `${SCHEDGE_API}/${requestData.year_id}/${requestData.semester_id}/search`;
  const params = { query: requestData.query };
  return makeRequest(url, { params });
};
