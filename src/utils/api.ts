import axios from "axios";

const endpoint = !!(process.env.NODE_ENV === "production")
  ? "https://evve.herokuapp.com/api/"
  : "https://evve.herokuapp.com/api/";

export async function getProjects() {
  const { data } = await axios.get(endpoint + "notion/projects");
  return data;
}
export async function wakeupServer() {
  return Number(!!(await axios.get(endpoint + "notion/")));
}
