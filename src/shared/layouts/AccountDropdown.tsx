'use client';

// libraries
import { useTheme } from 'next-themes';
import { User } from '@nextui-org/react';
import {LuLogOut, LuMoon, LuSun, LuFileText, LuBookmark} from 'react-icons/lu';

// libraries
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@shared/components/Dropdown';

const AccountDropdown = ({ trigger }) => {
  const { theme, setTheme } = useTheme();

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

        <DropdownItem
            variant="flat"
            color="secondary"
            href='/account/favorites'
            startContent={<LuBookmark size={16}/>}
        >
          نشان شده ها
        </DropdownItem>

        <DropdownItem
            variant="flat"
            color="secondary"
            href='/account/my-advertises'
            startContent={<LuFileText size={16}/>}
        >
          آگهی های من
        </DropdownItem>

        <DropdownItem
          key="theme"
          variant="flat"
          color="secondary"
          startContent={theme === 'dark' ? <LuSun size={16} /> : <LuMoon size={16} />}
          onPress={() => setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'))}
        >
          {theme === 'dark' ? 'حالت روز' : 'حالت شب'}
        </DropdownItem>

        <DropdownItem key="exit" variant="flat" color="danger" startContent={<LuLogOut size={16} />}>
          خروج
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default AccountDropdown;
