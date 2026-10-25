import { useProductStore } from '@/store';
import { Button } from '..';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

const Pagination = () => {
  const { pagination } = useProductStore();
  const { numberOfPages, currentPage } = pagination;

  const pages = Array.from({ length: numberOfPages }, (_, index) => index + 1);
  return (
    <div className='flex gap-3 justify-end'>
      <Button
        icon={<MdNavigateBefore className='size-5' />}
        label='Prev'
        iconDirection='left'
        className='bg-primary-foreground text-muted-foreground hover:bg-secondary'
      />
      <div className='flex'>
        {pages.map((pageNumber) => {
          return (
            <Button
              label={pageNumber}
              className={` ${pageNumber === currentPage ? '' : 'bg-primary-foreground text-muted-foreground hover:bg-secondary'} `}
            />
          );
        })}
      </div>
      <Button
        className='bg-primary-foreground text-muted-foreground hover:bg-secondary'
        icon={<MdNavigateNext className='size-5' />}
        label='Next'
      />
    </div>
  );
};

export default Pagination;
