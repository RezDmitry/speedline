import { useEffect, RefObject } from 'react';

export const useOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  close: () => void,
) => {
  useEffect(() => {
    // not found typing for event
    // https://stackoverflow.com/questions/70758654/
    // how-can-i-type-an-event-with-mouseevent-and-event-target-react-project-with-typ
    // not work
    const handleClickOutside = (e: any) => {
      const el = ref.current;
      if (el && !el.contains(e.target as Node)) {
        close();
        e.stopPropagation();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, close]);
};
