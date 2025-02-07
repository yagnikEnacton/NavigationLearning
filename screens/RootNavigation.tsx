import { createNavigationContainerRef, ParamListBase } from '@react-navigation/native';

// Create a navigation container reference
export const navigationRef = createNavigationContainerRef<ParamListBase>();

// Define the Navigate function
export function Navigate(name: string, params?: Record<string, any>): void {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
