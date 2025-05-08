import { useEffect, useRef } from "react";

export default function usePrevious(value: string | undefined) {
  const ref = useRef<string>();
  useEffect(() => {
    ref.current = value;
  }, []);
  return ref.current;
}
