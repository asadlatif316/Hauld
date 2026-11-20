import { Button } from '@/components';
import { useState } from 'react';
import { FormSectionWrapper as Card } from '@/components';
import { useOrderStore } from '@/store';
const OrderNotesCard = ({ id, notes }) => {
  const [edit, setEdit] = useState(false);
  const draftNotes = useOrderStore((s) => s.draft.notes);
  const updateNotes = useOrderStore((s) => s.updateNotes);
  const saveDraft = useOrderStore((s) => s.saveDraft);
  return (
    <Card>
      <div className='w-full'>
        <div className='flex items-center justify-between mb-4'>
          <h4 className='font-semibold text-primary'>Internal Notes</h4>
          {edit ? (
            <div className='flex gap-2'>
              <Button label='Cancel' onClick={() => setEdit(false)} />
              <Button label='Save' onClick={async () => {
                await saveDraft(id)
                setEdit(false)
              }} />
            </div>
          ) : (
            <Button label='Edit' onClick={() => setEdit(true)} />
          )}
        </div>
        {edit ? (
          <textarea
            rows={4}
            placeholder='Add a note for your team...'
            value={draftNotes}
            onChange={(e) => updateNotes(e.target.value)}
            className='w-full resize-none rounded-xl border border-border bg-muted/40 p-3 text-sm text-primary placeholder:text-muted-foreground outline-none focus:border-primary'
          />
        ) : (
          <p className='text-sm text-muted-foreground whitespace-pre-wrap'>
            {notes || 'No notes yet.'}
          </p>
        )}
      </div>
    </Card>
  );
};

export default OrderNotesCard;
