import { useEffect } from 'react';

const ConfirmDialog = ({
  open,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Go back',
  loading = false,
  onConfirm,
  onCancel,
}) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && !loading && onCancel();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, loading, onCancel]);

  if (!open) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4'
      onClick={() => !loading && onCancel()}
    >
      <div
        className='w-full max-w-sm rounded-2xl border border-border bg-card p-6 shadow-xl'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='mb-4 flex size-12 items-center justify-center rounded-full bg-red-500/10 text-red-400'>
          <svg
            viewBox='0 0 24 24'
            className='size-6'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M12 9v4M12 17h.01' />
            <path d='M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z' />
          </svg>
        </div>

        <h3 className='text-lg font-semibold text-primary'>{title}</h3>
        <p className='mt-2 text-sm text-muted-foreground'>{message}</p>

        <div className='mt-6 flex justify-end gap-2'>
          <button
            type='button'
            disabled={loading}
            onClick={onCancel}
            className='rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-primary hover:bg-muted disabled:opacity-60'
          >
            {cancelLabel}
          </button>
          <button
            type='button'
            disabled={loading}
            onClick={onConfirm}
            className='rounded-xl bg-red-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-600 disabled:opacity-60'
          >
            {loading ? 'Working...' : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
