import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 600);

  const resizeEventHandler = () => {
    setIsMobile(window.innerWidth <= 600);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeEventHandler);

    return () => window.removeEventListener("resize", resizeEventHandler);
  }, []);

  return isMobile;
};
