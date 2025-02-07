'use client';

// libraries
import { useTheme } from 'next-themes';
import { User } from '@nextui-org/react';
import {LuChartPie, LuLogOut, LuMoon, LuSun, LuFileText, LuBookmark, LuCircleUser} from 'react-icons/lu';

// libraries
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@/components/Dropdown';

const AccountDropdown = ({ trigger }) => {
  const { theme, setTheme } = useTheme();

  const dropdownLinks = [
    { id: 1, label: 'داشبورد', icon: LuChartPie({ size: 20 }), href: '/account/dashboard' },
    { id: 2, label: 'آگهی های من', icon: LuFileText({ size: 20 }), href: '/account/my-advertises' },
    { id: 3, label: 'نشان شده ها', icon: LuBookmark({ size: 20 }), href: '/account/favorites' },
    { id: 4, label: 'حساب کاربری', icon: LuCircleUser({ size: 20 }), href: '/account/profile' },
  ];

  return (
    <Dropdown>
      <DropdownTrigger>{trigger}</DropdownTrigger>
      <DropdownMenu>
        <DropdownItem key="user" variant="flat" color="secondary" href="/account/profile">
          <User
            avatarProps={{
              size: 'sm',
              src: 'https://avatars.githubusercontent.com/u/30373425?v=4',
            }}
            classNames={{
              name: 'text-foreground text-sm font-bold',
              description: 'text-foreground text-xs font-light',
            }}
            name="علیرضا نقدی"
            description="09195610753"
          />
        </DropdownItem>

        {dropdownLinks.map((dropdownLink) => (
          <DropdownItem
            key={dropdownLink.id}
            variant="flat"
            color="secondary"
            startContent={dropdownLink.icon}
            href={dropdownLink.href}
          >
            {dropdownLink.label}
          </DropdownItem>
        ))}

        <DropdownItem
          key="theme"
          variant="flat"
          color="secondary"
          startContent={theme === 'dark' ? <LuSun size={20} /> : <LuMoon size={20} />}
          onPress={() => setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'))}
        >
          {theme === 'dark' ? 'حالت روز' : 'حالت شب'}
        </DropdownItem>

        <DropdownItem key="exit" variant="flat" color="danger" startContent={<LuLogOut size={20} />}>
          خروج
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default AccountDropdown;
