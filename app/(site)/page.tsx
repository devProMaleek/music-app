import Header from '@/components/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="w-full h-full overflow-hidden overflow-y-auto rounded-lg bg-neutral-900">
        <Header>
          Header
        </Header>
      </div>
    </>
  );
}
