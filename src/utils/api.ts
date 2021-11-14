import axios from "axios";

const endpoint =
  process.env.NODE_ENV !== "production"
    ? "https://olvi.herokuapp.com/api"
    : // ? "http://localhost:8000/api"
      "https://olvi.herokuapp.com/api";

const api = axios.create({ baseURL: endpoint });
/* 
interface IValidators {
  regex: { valid: boolean; reason?: string };
  typo: { valid: boolean; reason?: string };
  disposable: { valid: boolean; reason?: string };
  mx: { valid: boolean; reason?: string };
  smtp: { valid: boolean; reason?: string };
  [key: string]: { valid: boolean; reason?: string };
} */

/* export async function verifyEmail(email: string) {
  const { data } = await api.post(
    "/email/verify",
    { email },
    { timeout: 20000 }
  );
  return data as {
    valid: boolean;
    reason: "regex" | "typo" | "disposable" | "mx" | "smtp";
    validators: IValidators;
  };
} */
export async function respond(email: string, message: string) {
  const { data } = await api.post(
    "/response",
    { email, message },
    { timeout: 10000 }
  );
  return data;
}

export async function wakeServer() {
  try {
    const { data } = await api.get("/");
    return data;
  } catch (error) {
    throw new Error("Something just broke lol");
  }
}
