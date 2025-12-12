import Button from '@/components/Button';
import { Menu, X } from 'lucide-react';
import {motion, AnimatePresence} from 'motion/react'
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className='sticky top-0 flex items-center justify-between p-5 sm:px-10 md:px-20 lg:px-32 border-b '
    >
      <h1 className='text-2xl font-bold cursor-pointer'>Shawal.<span className='text-muted-foreground'>ops</span></h1>
      <div className='hidden md:flex items-center gap-6'>
        <ul className='flex items-center gap-5'>
          <li className='cursor-pointer hover:border-b-2'>About</li>
          <li className='cursor-pointer hover:border-b-2'>Projects</li>
          <li className='cursor-pointer hover:border-b-2'>CP Stats</li>
          <li className='cursor-pointer hover:border-b-2'>Contact</li>
        </ul>
        <Button text = "Get in touch" className="px-5 py-2 bg-foreground/5 backdrop-blur-3xl border"/>
      </div>
      <div className='md:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='absolute top-16 left-0 w-full bg-background/95  border-t md:hidden flex flex-col items-center gap-5 py-5 z-10'
          >
            <ul className='flex flex-col items-center gap-5'>
              <li>About</li>
              <li>Projects</li>
              <li>CP Stats</li>
              <li>Contact</li>
            </ul>
            <Button text = "Get in touch" className="px-5 py-2 bg-foreground/5 backdrop-blur-3xl border"/>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Navbar
