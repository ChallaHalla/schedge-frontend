import fetch from "node-fetch";

const makeRequest = (url, data = { method: "GET" }) =>
  new Promise((resolve, reject) => {
    fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: data.method,
      body: JSON.stringify(data.body)
    })
      .then(res => {
        res.json().then(json => {
          resolve(json);
        });
      })
      .catch(err => {
        console.log(err);
        console.log("in the catch!");
        reject(err);
      });
  });
const SCHEDGE_API = `https://schedge.torchnyu.com`;
export const getSchools = requestParams => {
  // /schools
  const url = SCHEDGE_API + "/schools";
  return makeRequest(url);
};

export const getSchoolSubjects = requestParams => {
  // /subjects/school
  const url = SCHEDGE_API + "/" + "/" + requestParams.subject_id;
  return makeRequest(url);
};

export const getSubjectCourses = requestParams => {
  //  /{year}/{semester}/{school}/{subject}
  const url =
    SCHEDGE_API +
    "/" +
    requestParams.year_id +
    "/" +
    requestParams.semester_id +
    "/" +
    requestParams.school_id +
    "/" +
    requestParams.subject_id;
  return makeRequest(url);
};

export const getSearch = requestParams => {
  // /{year}/{semester}/search
  const url =
    SCHEDGE_API +
    "/" +
    requestParams.year_id +
    "/" +
    requestParams.subject_id +
    "/" +
    requestParams.query_id;
  return makeRequest(url);
};
