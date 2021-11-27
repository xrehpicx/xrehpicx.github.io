export default function LoginHandler() {
  const access_token = new URLSearchParams(window.location.search).get(
    "access_token"
  );
  return <div>{access_token}</div>;
}
