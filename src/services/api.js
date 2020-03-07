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
  const url = SCHEDGE_API + "/schools";
  return makeRequest(url);
};

export const getSubjects = requestParams => {
  const url = SCHEDGE_API + "/subjects";
  return makeRequest(url);
};
