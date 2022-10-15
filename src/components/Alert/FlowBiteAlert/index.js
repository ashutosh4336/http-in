import { Alert } from 'flowbite-react';

export default function FAlert({ variant = 'info', text = '', closeAlert }) {
  return (
    <Alert
      onDismiss={closeAlert}
      rounded={true}
      color={variant}
      withBorderAccent={true}
    >
      {text}
    </Alert>
  );
}
