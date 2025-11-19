import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { SunFill, MoonStarsFill, GearFill } from 'react-bootstrap-icons';
import { useTheme } from '../context/ThemeContext';

function ThemeToggleButton() {
  const { theme, changeTheme } = useTheme();

  // Helper to show the correct icon for the current theme
  const renderIcon = () => {
    if (theme === 'light') return <SunFill />;
    if (theme === 'dark') return <MoonStarsFill />;
    return <GearFill />; // System
  };

  return (
    <NavDropdown title={renderIcon()} align="end">
      <NavDropdown.Item onClick={() => changeTheme('light')}>
        <SunFill className="me-2" /> Light
      </NavDropdown.Item>
      <NavDropdown.Item onClick={() => changeTheme('dark')}>
        <MoonStarsFill className="me-2" /> Dark
      </NavDropdown.Item>
      <NavDropdown.Item onClick={() => changeTheme('system')}>
        <GearFill className="me-2" /> System
      </NavDropdown.Item>
    </NavDropdown>
  );
}

export default ThemeToggleButton;