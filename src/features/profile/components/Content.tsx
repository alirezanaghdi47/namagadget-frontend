'use client';

// libraries
import { useState } from 'react';
import { LuInfo, LuShield } from 'react-icons/lu';

// components
import { Tab, Tabs } from '@/components/Tabs';

// features
import InformationFormData from '@/features/profile/components/InformationFormData';
import SecurityFormData from '@/features/profile/components/SecurityFormData';

const Content = () => {
  const [page, setPage] = useState('information');

  return (
    <div className="flex w-full flex-col items-start justify-start gap-2">
      <Tabs variant="solid" color="primary" selectedKey={page} onSelectionChange={setPage} className="w-full">
        <Tab
          key="information"
          title={
            <div className="flex gap-2">
              <LuInfo size={16} /> <span>اطلاعات کاربری</span>
            </div>
          }
          className="w-full"
        >
          <InformationFormData />
        </Tab>

        <Tab
          key="security"
          title={
            <div className="flex gap-2">
              <LuShield size={16} /> <span>امنیت و رمز عبور</span>
            </div>
          }
          className="w-full"
        >
          <SecurityFormData />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Content;
