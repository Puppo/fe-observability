import { createContext, useContext } from 'react';

interface PackegeInfoContext {
  name: string;
  version: string;
  environment: 'development' | 'production';
}

export const PackageInfoContext = createContext<PackegeInfoContext | undefined>(
  undefined
);

export function usePackageInfo() {
  const context = useContext(PackageInfoContext);
  if (context === undefined) {
    throw new Error('usePackageInfo must be used within a PackageInfoProvider');
  }

  const { name, version, environment } = context;

  return {
    name,
    version,
    environment,
  };
}
