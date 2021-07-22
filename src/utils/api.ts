import axios from "axios";

const endpoint = !!(process.env.NODE_ENV === "production")
  ? "https://evve.herokuapp.com/api/"
  : "http://localhost:8000/api/";

export async function getProjects() {
  const { data } = await axios.get(endpoint + "notion/projects");
  return data;
}
export async function wakeupServer() {
  return !!(await axios.get(endpoint + "notion/"));
}
