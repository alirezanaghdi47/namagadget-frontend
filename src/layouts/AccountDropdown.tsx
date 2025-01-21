'use client';

// libraries
import { useTheme } from 'next-themes';
import { User } from '@nextui-org/react';
import { LuInfo, LuLogOut, LuMoon, LuSun } from 'react-icons/lu';

// libraries
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@/components/Dropdown';

const AccountDropdown = ({ trigger }) => {
  const { theme, setTheme } = useTheme();

  return (
    <Dropdown>
      <DropdownTrigger>{trigger}</DropdownTrigger>
      <DropdownMenu>
        <DropdownItem key="user" variant="light" isReadOnly className="cursor-default">
          <User
            avatarProps={{
              size: 'sm',
              src: 'https://avatars.githubusercontent.com/u/30373425?v=4',
            }}
            classNames={{
              name: 'text-foreground',
            }}
            name="علیرضا نقدی"
          />
        </DropdownItem>
        <DropdownItem
          key="profile"
          variant="flat"
          color="secondary"
          startContent={<LuInfo size={20} />}
          href="/account/profile"
        >
          اطلاعات من
        </DropdownItem>
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
