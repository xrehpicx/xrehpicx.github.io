import { useEffect } from "react";

export function useLoaderCleanup() {
  useEffect(() => {
    const loader = document.getElementById("loader");
    loader && loader.remove();
  }, []);
}
