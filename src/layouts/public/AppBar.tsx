'use client';

// libraries
import { LuSearch } from 'react-icons/lu';

// components
import { TextInput } from '@/components/TextInput';

const AppBar = () => {
  return (
    <header className="fixed left-0 top-0 flex h-[80px] w-full items-center justify-center gap-2 border-b border-b-secondary/10 bg-default lg:hidden">
      <div className="flex w-full max-w-2xl items-center justify-between p-4">
        <TextInput
          name="search"
          type="text"
          variant="flat"
          size="md"
          startContent={<LuSearch size={16} />}
          placeholder="جستجو کنید"
          className="w-full"
        />
      </div>
    </header>
  );
};

export default AppBar;
