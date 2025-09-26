'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Heart, Star, Send } from 'lucide-react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setMessage(`Hello, ${inputValue}! 👋`);
      setInputValue('');
    }
  };

  return (
    <div className='min-h-screen bg-background text-foreground'>
      <div className='container mx-auto px-4 py-8'>
        {/* Header */}
        <header className='text-center mb-12'>
          <Image
            className='mx-auto mb-6 dark:invert'
            src='/next.svg'
            alt='Next.js logo'
            width={180}
            height={38}
            priority
          />
          <h1 className='text-4xl font-bold mb-4'>
            Next.js 15 + shadcn/ui Demo
          </h1>
          <p className='text-muted-foreground text-lg'>
            Showcasing Tailwind CSS integration with reusable components
          </p>
        </header>

        {/* Component Demo Section */}
        <div className='max-w-4xl mx-auto space-y-12'>
          {/* Button Variants */}
          <section className='space-y-6'>
            <h2 className='text-2xl font-semibold'>Button Components</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              <div className='space-y-4 p-6 border rounded-lg'>
                <h3 className='font-medium'>Default Variants</h3>
                <div className='flex flex-wrap gap-2'>
                  <Button>Default</Button>
                  <Button variant='secondary'>Secondary</Button>
                  <Button variant='outline'>Outline</Button>
                </div>
              </div>

              <div className='space-y-4 p-6 border rounded-lg'>
                <h3 className='font-medium'>Sizes</h3>
                <div className='flex flex-wrap items-center gap-2'>
                  <Button size='sm'>Small</Button>
                  <Button size='default'>Default</Button>
                  <Button size='lg'>Large</Button>
                </div>
              </div>

              <div className='space-y-4 p-6 border rounded-lg'>
                <h3 className='font-medium'>With Icons</h3>
                <div className='flex flex-wrap gap-2'>
                  <Button>
                    <Heart className='mr-2 h-4 w-4' />
                    Like
                  </Button>
                  <Button variant='outline'>
                    <Star className='mr-2 h-4 w-4' />
                    Star
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Input Demo */}
          <section className='space-y-6'>
            <h2 className='text-2xl font-semibold'>Input Components</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-4 p-6 border rounded-lg'>
                <h3 className='font-medium'>Basic Input</h3>
                <Input placeholder='Enter your name...' />
                <Input type='email' placeholder='Enter your email...' />
                <Input type='password' placeholder='Enter your password...' />
              </div>

              <div className='space-y-4 p-6 border rounded-lg'>
                <h3 className='font-medium'>Input with Button</h3>
                <div className='flex gap-2'>
                  <Input placeholder='Search...' />
                  <Button size='icon' variant='outline'>
                    <Search className='h-4 w-4' />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Demo */}
          <section className='space-y-6'>
            <h2 className='text-2xl font-semibold'>Interactive Demo</h2>
            <div className='p-6 border rounded-lg bg-card'>
              <div className='space-y-4'>
                <div className='flex gap-2'>
                  <Input
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    placeholder='Enter your name...'
                    onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                  />
                  <Button onClick={handleSubmit}>
                    <Send className='mr-2 h-4 w-4' />
                    Send
                  </Button>
                </div>
                {message && (
                  <div className='p-4 bg-muted rounded-md'>
                    <p className='text-sm'>{message}</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Tailwind Classes Demo */}
          <section className='space-y-6'>
            <h2 className='text-2xl font-semibold'>Tailwind CSS Classes</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div className='p-4 bg-primary text-primary-foreground rounded-lg'>
                <p className='font-medium'>Primary Colors</p>
                <p className='text-sm opacity-90'>
                  bg-primary text-primary-foreground
                </p>
              </div>
              <div className='p-4 bg-secondary text-secondary-foreground rounded-lg'>
                <p className='font-medium'>Secondary Colors</p>
                <p className='text-sm opacity-90'>
                  bg-secondary text-secondary-foreground
                </p>
              </div>
              <div className='p-4 bg-muted text-muted-foreground rounded-lg'>
                <p className='font-medium'>Muted Colors</p>
                <p className='text-sm'>bg-muted text-muted-foreground</p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className='mt-16 pt-8 border-t text-center'>
          <div className='flex justify-center gap-6 text-sm text-muted-foreground'>
            <a
              href='https://nextjs.org/docs'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-foreground transition-colors'
            >
              Next.js Docs
            </a>
            <a
              href='https://ui.shadcn.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-foreground transition-colors'
            >
              shadcn/ui
            </a>
            <a
              href='https://tailwindcss.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-foreground transition-colors'
            >
              Tailwind CSS
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
