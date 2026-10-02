import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'fade', // Transição suave entre telas no Web/Mobile
      }}
    />
  );
}