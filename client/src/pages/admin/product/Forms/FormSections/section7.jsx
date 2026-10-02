import { FormSectionWrapper } from '@/components';
import { useUIStore } from '@/store/useUIStore';
const Section7 = () => {
  const { name, price, image, category, stock } = useUIStore();
  const checks = [
    { ok: !!name, label: 'name' },
    { ok: !!image, label: 'product image' },
    { ok: !!category, label: 'category' },
    { ok: Number(price) > 0, label: 'price' },
    { ok: stock >= 0, label: 'stock' },
  ];

  const done = checks.filter((c) => c.ok).length;
  const missing = checks.filter((c) => !c.ok).map((c) => c.label);
  return (
    <FormSectionWrapper heading='Ready to publish'>
      <div className='flex flex-col gap-3'>
        <span className='font-mono text-sm'>
          {done} of {checks.length}
        </span>
        <div className='bg-muted h-1.5 w-full rounded-full'>
          <div
            className={`h-full rounded-full bg-muted-foreground transition-all duration-300`}
            style={{ width: `${(done / checks.length) * 100}%` }}
          ></div>
        </div>
        {missing.length > 0 && (
          <p className='text-sm text-destructive'>
            Missing: {missing.join(', ')}
          </p>
        )}
      </div>
    </FormSectionWrapper>
  );
};

export default Section7;
