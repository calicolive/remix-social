import { Props } from './types';

export default function Post({ header, children }: Props) {
  return (
    <div className='flex flex-col p-6 max-w-md border rounded-sm'>
      {header && <h2 className='font-bold text-3xl text-gray-900'>{header}</h2>}
      <p className='mt-4 text-lg text-gray-900'>{children}</p>
    </div>
  );
}
