import Header from '@/components/Header';
import ListItem from '@/components/ListItem';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="w-full h-full overflow-hidden overflow-y-auto rounded-lg bg-neutral-900">
        <Header>
          <div className="mb-2">
            <h1 className="text-white text-3xl font-semibold">Welcome back</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
              <ListItem image='/images/liked.png' href='liked' name='Liked Songs' />
            </div>
          </div>
        </Header>
        <div className="mt-2 mb-7 px-6">
          <div className="flex justify-between items-start">
            <h1 className="text-white text-2xl font-semibold">
              Latest Songs
            </h1>
          </div>
          <div className="">
            List of Songs
          </div>
        </div>
      </div>
    </>
  );
}
