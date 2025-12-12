
import person from '@/assets/person.png';
import { ArrowRight, Cpu, Download, Terminal } from 'lucide-react';
import { motion } from 'motion/react'
import Button from '@/components/Button';
const Hero = () => {
  return (
    <div className='grid md:grid-cols-2 p-5 sm:px-10 md:px-20 lg:px-32 justify-center items-center min-h-[90vh] '>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className='text-5xl md:text-6xl lg:text-8xl mb-5 '>Solving Problems, Building Apps</h1>
        <p className="text-xl text-muted-foreground">A 2nd-year undergrad at RUET. I'm super into competitive programming and love building web apps. Just enjoying the process of learning new tech and solving fun problems!</p>
        <div className='flex space-x-5 mt-10 items-center'>
          <Button text = "View Projects" className="px-7 py-4 bg-foreground text-background flex justify-center items-center gap-1 group">
            <ArrowRight size={20} className='group-hover:translate-x-1.5 transition-transform'/>
          </Button>
          <Button text = "View Projects" className="px-6 py-4 bg-foreground/5 backdrop-blur-3xl flex justify-center items-center gap-1 group border">
            <Download size={20} className='group-hover:translate-x-1.5 transition-transform'/>
          </Button>
        </div>
      </motion.div>
      <div className='flex justify-center relative mt-15 md:mt-0'>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 p-3 bg-background/70 backdrop-blur-md border rounded-2xl shadow-xl z-20"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/20 rounded-lg ">
              <Terminal size={20} />
            </div>
            <div>
              <p className="text-xs ">Competitive</p>
              <p className="text-sm font-bold ">Programming</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 p-3 bg-background/70 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl z-20"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/20 rounded-lg ">
              <Cpu size={20} />
            </div>
            <div>
              <p className="text-xs ">Full Stack</p>
              <p className="text-sm font-bold ">Development</p>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8}}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="rounded-full p1 border-4 border-muted-foreground "
        >
          <img
            src={person}
            alt="Hero Image"
            className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
