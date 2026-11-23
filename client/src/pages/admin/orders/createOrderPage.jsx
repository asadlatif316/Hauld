import {
  CustomerDetails,
  OrderItems,
  OrderNotes,
  OrderReviewCard,
} from '@/features';

const CreateOrderPage = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4'>
      <div className='md:w-3/4'>
        <CustomerDetails />
        <OrderItems />
        <OrderNotes />
      </div>
      <OrderReviewCard />
    </div>
  );
};

export default CreateOrderPage;
