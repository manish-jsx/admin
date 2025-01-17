'use client';

import { AppShell, Loader, Center } from '@mantine/core';
import { AdminHeader } from './AdminHeader';
import { Navbar } from './Navbar';
import { useSettings } from '@/hooks/useSettings';

export function AdminPageLayout({ children }: { children: React.ReactNode }) {
  const { data: settings, isLoading } = useSettings();

  if (isLoading) {
    return (
      <Center h="100vh">
        <Loader />
      </Center>
    );
  }

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm' }}
      padding="md"
    >
      <AppShell.Header>
        <AdminHeader
          siteName={settings?.siteName}
          logoUrl={settings?.logoUrl}
        />
      </AppShell.Header>
      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}

export default AdminPageLayout; 