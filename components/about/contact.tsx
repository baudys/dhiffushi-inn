'use client'

import { AiFillPhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { Container } from '../container'
import { motion } from 'framer-motion'

interface PersonProps {
  role: string
  name: string
  tel: string
  email: string
}

export const Person = ({ role, name, tel, email }: PersonProps) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2 }}
      className='flex-1 p-4 rounded-md ring-1 ring-zinc-400'
    >
      <h4 className='text-xs text-zinc-500'>{role}</h4>
      <h3 className='text-lg font-semibold text-black uppercase'>{name}</h3>
      <p className='flex items-center gap-2 text-zinc-700'>
        <AiFillPhone /> {tel}
      </p>
      <p className='flex items-center gap-2 text-zinc-700'>
        <MdEmail /> {email}
      </p>
    </motion.div>
  )
}

export const Contact = () => {
  return (
    <Container>
      <div className='grid gap-4 xl:gap-20 xl:grid-cols-[1fr_1.4fr]'>
        <div className=''>
          <motion.div initial={{ y: -50 }} animate={{ y: 0 }}>
            <h4 className='text-lg font-medium text-black'>Dhiffushi Inn</h4>

            <p className='text-sm text-zinc-800'>
              Wintergreenhigun K.Dhiffushi
            </p>
            <p className='text-sm text-zinc-800'>08030, Maldives</p>
          </motion.div>

          <div className='flex flex-col gap-4 mt-10 lg:mt-20'>
            <Person
              role='majitel'
              name='John Doe'
              tel='+482 583 682 583'
              email='john.doe@email.com'
            />
            <Person
              role='majitel'
              name='John Doe'
              tel='+482 583 682 583'
              email='john.doe@email.com'
            />
            <Person
              role='majitel'
              name='John Doe'
              tel='+482 583 682 583'
              email='john.doe@email.com'
            />
          </div>
        </div>
        <motion.iframe
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          src='https://maps.google.com/maps?q=dhiffushi-inn&t=&z=13&ie=UTF8&iwloc=&output=embed'
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          className='w-full h-full rounded-md aspect-square'
        />
      </div>
    </Container>
  )
}
