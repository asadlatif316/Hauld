import { Toaster } from "react-hot-toast";

const ToastWrapper = () => (
  <Toaster
    position='top-right'
    toastOptions={{
      duration: 3000,
      style: {
        background: 'var(--card)',
        color: 'var(--card-foreground)',
        border: '1px solid var(--border)',
        fontSize: '14px',
      },
    }}
  />
);

export default ToastWrapper