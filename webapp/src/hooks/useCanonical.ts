import { useEffect } from "react";

export function useCanonical(path: string) {
  useEffect(() => {
    const url = `https://www.similarcasino.com${path}`;
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (link) {
      link.href = url;
    } else {
      link = document.createElement("link");
      link.rel = "canonical";
      link.href = url;
      document.head.appendChild(link);
    }
    return () => {
      if (link) link.href = "https://www.similarcasino.com/";
    };
  }, [path]);
}
