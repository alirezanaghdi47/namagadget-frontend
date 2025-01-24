'use client';

// libraries
import { Link } from '@nextui-org/react';
import { LuGithub, LuLinkedin } from 'react-icons/lu';

// components
import { Button } from '@/components/Button';

const Footer = () => {
  return (
    <footer className="hidden w-full items-center justify-center gap-4 border-t border-t-secondary/10 bg-default lg:flex">
      <div className="flex w-full max-w-6xl items-center justify-between gap-4 p-4">
        <p className="text-sm font-light text-secondary">این وب سایت آزمایشی است و داده های آن حقیقی نمی باشد</p>

        <ul className="flex items-center justify-end gap-4">
          <li className="">
            <Button
              as={Link}
              color="secondary"
              size="sm"
              variant="light"
              isIconOnly
              href="https://github.com/alirezanaghdi47"
              target="_blank"
              isExternal
            >
              <LuGithub size={20} />
            </Button>
          </li>

          <li className="">
            <Button
              as={Link}
              color="secondary"
              size="sm"
              variant="light"
              isIconOnly
              href="https://www.linkedin.com/in/alireza-naghdi"
              target="_blank"
              isExternal
            >
              <LuLinkedin size={20} />
            </Button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
