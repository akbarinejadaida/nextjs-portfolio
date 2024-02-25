import Hero from '@/components/hero'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <div className='container mx-auto py-4 px-12'>
        <Hero />
      </div>
    </main>
  );
}
