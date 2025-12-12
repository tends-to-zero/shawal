import Button from '@/components/Button';
import { Menu } from 'lucide-react';
import {motion} from 'motion/react'

const Navbar = () => {
  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className='sticky top-0 flex items-center justify-between p-5 sm:px-10 md:px-20 lg:px-32 border-b backdrop-blur-3xl'
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
      <Menu className='md:hidden cursor-pointer'/>
    </motion.div>
  )
}

export default Navbar
