import { useEffect, useRef } from "react";

export function useTodosInfiniteScroll(
  pageNum,
  setPageNum: (pageNum: number) => void
) {
  const lastElementRef = useRef(null);

  const observer = useRef(
    new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        const newPageNum = pageNum + 1;
        setPageNum(newPageNum);
      }
    })
  );

  useEffect(() => {
    const currentObserver = observer.current;

    lastElementRef.current && currentObserver.observe(lastElementRef.current);

    return () => {
      lastElementRef.current &&
        currentObserver.unobserve(lastElementRef.current);
    };
  }, [lastElementRef]);

  return lastElementRef;
}
