'use client'

import { AiFillPhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { Container } from '../container'
import { motion } from 'framer-motion'
import { useLanguage } from '@/store/use-language'

interface PersonProps {
  name: string
  tel: string
  email: string
}

export const Person = ({ name, tel, email }: PersonProps) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2 }}
      className='flex-1 p-4 rounded-md ring-1 ring-zinc-400'
    >
      <h3 className='text-lg font-semibold text-black uppercase'>{name}</h3>
      <p className='flex items-center gap-2 text-zinc-700'>
        <AiFillPhone />
        <a href={`tel:${tel}`}>{tel}</a>
      </p>
      <p className='flex items-center gap-2 text-zinc-700'>
        <MdEmail />
        <a href={`mailto:${email}`}>{email}</a>
      </p>
    </motion.div>
  )
}

export const Contact = () => {
  const { language } = useLanguage()

  return (
    <Container>
      <div className='grid gap-4 xl:gap-20 xl:grid-cols-[1fr_1.4fr]'>
        <div>
          <motion.div initial={{ y: -50 }} animate={{ y: 0 }}>
            <h4 className='text-lg font-medium text-black'>Dhiffushi Inn</h4>

            <p className='text-sm text-zinc-800'>
              Wintergreenhigun K.Dhiffushi
            </p>
            <p className='text-sm text-zinc-800'>08030, Maldives</p>
          </motion.div>

          <div className='flex flex-col gap-4 mt-10 lg:mt-20'>
            {language === 'cz' ? (
              <Person
                name='Lucie'
                tel='+420 725 752 789'
                email='dhiffushi.inn.cz@gmail.com'
              />
            ) : (
              <Person
                name='Arysh'
                tel='+960 9985488'
                email='dhiffushi.inn@gmail.com'
              />
            )}
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
