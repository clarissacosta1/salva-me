import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.salveme.app',
  appName: 'Salve-me',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;

