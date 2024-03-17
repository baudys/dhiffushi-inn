'use client'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Command, CommandGroup, CommandItem } from '@/components/ui/command'
import { Check, ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/store/use-language'

const languages = [
  {
    value: 'cz',
    src: '/flags/cz.webp',
  },
  {
    value: 'en',
    src: '/flags/en.webp',
  },
  {
    value: 'ru',
    src: '/flags/ru.webp',
  },
]

interface Props {
  isTopOfTheScreen: boolean
  home: boolean
}

const LanguageSelector = ({ isTopOfTheScreen, home }: Props) => {
  const { language, imgSrc, setLanguage } = useLanguage(state => state)

  const [open, setOpen] = useState<boolean>(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className='hover:bg-zinc-400/60'>
        <Button
          variant='outline'
          role='combobox'
          name='language selector'
          aria-expanded={open}
          className={cn(
            'w-[70px] border-none justify-between bg-transparent gap-2',
            home && isTopOfTheScreen
              ? 'text-zinc-100 hover:text-zinc-200'
              : 'text-zinc-900 hover:text-zinc-800'
          )}
        >
          <Image src={imgSrc(language)} width={30} height={30} alt={language} />
          <ChevronsUpDown className='w-4 h-4 my-2 opacity-90 shrink-0' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[100px] p-2 z-[1001] bg-zinc-100 backdrop-blur-lg border-zinc-500/40'>
        <Command className='!bg-transparent'>
          <CommandGroup className='space-y-2'>
            {languages.map(({ src, value }: { src: string; value: string }) => (
              <CommandItem
                key={value}
                onSelect={() => {
                  setLanguage(value)
                  setOpen(false)
                }}
                className='mb-2 !bg-transparent hover:!bg-zinc-400/20'
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4 text-zinc-900',
                    language === value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                <Image src={src} width={30} height={30} alt={value} />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default LanguageSelector
