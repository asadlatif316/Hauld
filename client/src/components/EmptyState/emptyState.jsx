const EmptyState = ({ icon, title, description, action }) => {
  return (
    <div className='py-10 px-4  flex flex-col items-center gap-2 text-center'>
      {icon && (
        <div className='text-muted-foreground [&_svg]:size-10'>{icon}</div>
      )}
      <div className=' max-w-xs'>
        <h3 className='font-semibold text-primary'>{title}</h3>
        {description && (
          <p className='text-sm text-muted-foreground'>{description}</p>
        )}
      </div>
      {action && <div className='flex gap-2'>{action}</div>}
    </div>
  );
};


export default EmptyState;
