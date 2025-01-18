'use client';

// libraries
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { LuMoon, LuSun } from 'react-icons/lu';

// components
import { Button } from '@/components/Button';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      color="secondary"
      size="md"
      variant="light"
      isIcon
      onClick={() => setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'))}
    >
      {theme === 'dark' ? <LuSun size={20} /> : <LuMoon size={20} />}
    </Button>
  );
};

export default ThemeSwitcher;
