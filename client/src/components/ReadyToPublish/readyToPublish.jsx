import { useProductStore } from '@/store';
import { FaRegCircle } from 'react-icons/fa';
import { FaCircleCheck } from 'react-icons/fa6';
import { selectField } from '@/utils';
const ReadyToPublish = () => {
  const image = useProductStore(selectField('image'));
  const name = useProductStore(selectField('name'));
  const category = useProductStore(selectField('category'));
  const price = useProductStore(selectField('price'));
  const stock = useProductStore(selectField('stock'));
  const checks = [
    { ok: !!name, label: 'name' },
    { ok: !!image, label: 'product image' },
    { ok: !!category, label: 'category' },
    { ok: Number(price) > 0, label: 'price' },
    { ok: stock >= 0, label: 'stock' },
  ];
  const results = checks.map((c) => c.ok);
  const done = checks.filter((c) => c.ok).length;

  return (
    <div className='px-4 py-6 bg-card flex flex-col gap-3 border border-border rounded-lg'>
      <h2 className='font-medium lg:font-bold'>Ready to Publish</h2>
      <div className='bg-muted h-1.5 w-full rounded-full'>
        <div
          className={`h-full rounded-full bg-muted-foreground transition-all duration-300`}
          style={{ width: `${(done / checks.length) * 100}%` }}
        ></div>
      </div>
      <div className='flex flex-col gap-2'>
        {checks.map((check) => (
          <div key={check.label} className='flex items-center gap-2 capitalize'>
            {check.ok ? (
              <FaCircleCheck className='size-4 shrink-0' />
            ) : (
              <FaRegCircle className='size-4 shrink-0 text-muted-foreground' />
            )}
            <p className={check.ok ? '' : 'text-muted-foreground'}>
              {check.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadyToPublish;
