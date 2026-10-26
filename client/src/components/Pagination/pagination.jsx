import { useProductStore } from '@/store';
import { Button } from '..';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

const Pagination = () => {
  const { pagination, setFilter } = useProductStore();
  const { numberOfPages, currentPage } = pagination;

  const pages = Array.from({ length: numberOfPages }, (_, index) => index + 1);

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <Button
        label={pageNumber}
        className={` ${activeClass ? '' : 'bg-primary-foreground text-muted-foreground hover:bg-secondary'} `}
        onClick={() => setFilter('page', pageNumber)}
      />
    );
  };

  const renderButtons = () => {
    const pageButtons = [];
    pageButtons.push(
      addPageButton({ pageNumber: 1, activeClass: currentPage === 1 }),
    );

    if (currentPage > 3) {
      pageButtons.push(
        <span className='px-1.5 text-muted-foreground font-semibold'>...</span>,
      );
    }

    if (currentPage !== 1 && currentPage !== 2) {
      pageButtons.push(
        addPageButton({ pageNumber: currentPage - 1, activeClass: false }),
      );
    }

    if (currentPage !== 1 && currentPage !== numberOfPages) {
      pageButtons.push(
        addPageButton({ pageNumber: currentPage, activeClass: true }),
      );
    }
    if (currentPage !== numberOfPages && currentPage !== numberOfPages - 1) {
      pageButtons.push(
        addPageButton({ pageNumber: currentPage + 1, activeClass: false }),
      );
    }

    if (currentPage < numberOfPages - 2) {
      pageButtons.push(
        <span className='px-1.5 text-muted-foreground font-semibold'>...</span>,
      );
    }

    pageButtons.push(
      addPageButton({
        pageNumber: numberOfPages,
        activeClass: currentPage === numberOfPages,
      }),
    );
    return pageButtons;
  };

  return (
    <div className='flex gap-3 justify-end'>
      <Button
        icon={<MdNavigateBefore className='size-5' />}
        label='Prev'
        iconDirection='left'
        className='bg-primary-foreground text-muted-foreground hover:bg-secondary'
        onClick={() => {
          let prev = currentPage - 1;
          if (prev < 1) prev = numberOfPages;
          setFilter('page', prev);
        }}
      />
      <div className='flex'>{renderButtons()}</div>
      <Button
        className='bg-primary-foreground text-muted-foreground hover:bg-secondary'
        icon={<MdNavigateNext className='size-5' />}
        label='Next'
        onClick={() => {
          let next = currentPage + 1;
          if (next > numberOfPages) next = 1;
          setFilter('page', next);
        }}
      />
    </div>
  );
};

export default Pagination;
