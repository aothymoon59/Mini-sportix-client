import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - MiniSportix `;
  }, [title]);
};

export default useTitle;
