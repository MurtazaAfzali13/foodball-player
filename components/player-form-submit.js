'use client';

import { useFormStatus } from 'react-dom';

export default function PlayersFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? 'Submitting...' : 'Share player'}
    </button>
  );
}
