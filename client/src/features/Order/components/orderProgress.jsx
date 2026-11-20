import { FormSectionWrapper as Card } from '@/components';
import { orderProgressSteps } from '../constants/orderProgressSteps';
import { formatDateTime } from '@/utils';
const OrderProgress = ({ status, date }) => {
  const currentIndex = orderProgressSteps.findIndex((s) => s.key === status);
  return (
    <Card>
      <div>
        <h4 className='font-semibold text-primary'>Progress</h4>
        <ol className='flex justify-around md:flex-col'>
          {orderProgressSteps.map((step, index) => {
            const isDone = index < currentIndex;
            const isCurrent = index === currentIndex;
            const isLast = index === orderProgressSteps.length - 1;
            return (
              <li
                key={step.key}
                className='flex-1 md:flex-none flex flex-col items-center gap-2 md:flex-row md:items-stretch md:gap-3'
              >
                <div className='flex flex-col items-center'>
                  <span
                    className={`size-4 shrink-0 rounded-full border-2 ${
                      isCurrent
                        ? 'bg-primary border-primary ring-4 ring-primary/30'
                        : isDone
                          ? 'bg-primary border-primary'
                          : 'bg-transparent border-muted-foreground/40'
                    }`}
                  />
                  {!isLast && (
                    <span
                      className={`hidden md:block w-px flex-1 min-h-6 ${
                        isDone ? 'bg-primary' : 'bg-border'
                      }`}
                    />
                  )}
                </div>

                <div
                  className={`text-center md:text-left ${isLast ? '' : 'md:pb-6'}`}
                >
                  <p
                    className={`text-sm ${
                      isCurrent
                        ? 'font-semibold text-primary'
                        : isDone
                          ? 'text-primary'
                          : 'text-muted-foreground'
                    }`}
                  >
                    {step.label}
                  </p>
                  {isCurrent && status === 'pending' && date && (
                    <p className='hidden md:block text-xs text-muted-foreground'>
                      Current - placed {formatDateTime(date)}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Card>
  );
};

export default OrderProgress;
