import { PackageInfoContext } from '@fe-observability/utils/package-info';
import Router from './routes';

import packageJson from '../../../../package.json';

export function App() {
  return (
    <PackageInfoContext.Provider
      value={{
        name: packageJson.name,
        version: packageJson.version,
        environment:
          process.env.NODE_ENV === 'production' ? 'production' : 'development',
      }}
    >
      <Router />
    </PackageInfoContext.Provider>
  );
}

export default App;
