// 다크 모드와 라이트 모드 전환하는 Hook

import { useState } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};