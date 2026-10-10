const LOW_STOCK_THRESHOLD = 10;

const getStockStatus = (stock) => {
  if (stock === 0) return 'out';
  if (stock < LOW_STOCK_THRESHOLD) return 'low';
  return 'ok';
};

const selectField = (key) => (s) => {
  return s.mode === 'edit'
    ? ((s.isEditing && s.editDraft ? s.editDraft : s.singleProduct)?.[key] ??
        '')
    : s[key];
};

const selectReadOnly = (s) => s.mode === 'edit' && !s.isEditing;

export { getStockStatus, selectField, selectReadOnly };
