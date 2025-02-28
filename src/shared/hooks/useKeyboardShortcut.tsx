import { useEffect } from 'react';

const useKeyboardShortcut = (keys: Key[], callback: () => void) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        keys.every(
          (key) =>
            (key === 'ctrl' && event.ctrlKey) ||
            (key === 'shift' && event.shiftKey) ||
            (key === 'alt' && event.altKey) ||
            (typeof key === 'string' && event.key.toLowerCase() === key),
        )
      ) {
        callback();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [keys, callback]);
};

type Key = 'ctrl' | 'shift' | 'alt' | string;

export default useKeyboardShortcut;
