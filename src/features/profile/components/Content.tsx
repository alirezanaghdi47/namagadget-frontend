'use client';

// libraries
import { useState } from 'react';
import { LuInfo, LuShield } from 'react-icons/lu';

// components
import { Tab, Tabs } from '@shared/components/Tabs';

// features
import InformationFormData from '@features/profile/components/InformationFormData';
import SecurityFormData from '@features/profile/components/SecurityFormData';

const Content = () => {
  const [page, setPage] = useState('information');

  const tabLinks = [
    {
      id: 1,
      key: 'information',
      label: 'اطلاعات کاربری',
      icon: LuInfo({ size: 16 }),
      content: <InformationFormData />,
    },
    { id: 2, key: 'security', label: 'امنیت و رمز عبور', icon: LuShield({ size: 16 }), content: <SecurityFormData /> },
  ];

  return (
    <div className="flex w-full flex-col items-start justify-start gap-2">
      <Tabs variant="solid" color="primary" selectedKey={page} onSelectionChange={setPage} className="w-full">
        {tabLinks.map((tabLink) => (
          <Tab
            key={tabLink.key}
            title={
              <div className="flex gap-2">
                {tabLink.icon} <span>{tabLink.label}</span>
              </div>
            }
            className="w-full"
          >
            {tabLink.content}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default Content;
