const FormTitle = ({heading, description}) => {
  return (
    <div className='w-2/6'>
      <h2 className='font-medium lg:font-bold lg:mb-2'>{heading}</h2>
      <p className='hidden lg:block text-muted-foreground text-xs w-50'>
        {description}
      </p>
    </div>
  );
}

export default FormTitle
