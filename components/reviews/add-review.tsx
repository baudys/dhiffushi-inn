'use client'

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Textarea } from '@/components/ui/textarea'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { useState } from 'react'
import { addReview } from '@/actions/add-review'
import { Container } from '../container'
import { useLanguage } from '@/store/use-language'
import Link from 'next/link'

export const AddReview = () => {
  const { language } = useLanguage()

  const schema = z.object({
    name: z.string().min(1, { message: 'Vyplňte svoje jméno.' }),
    text: z.string(),
  })

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      text: '',
    },
  })

  const [rating, setRating] = useState<number>(0)

  const handleStarClick = (clickedIndex: any) => {
    setRating(clickedIndex + 1)
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    const formData = { ...data, rating }

    addReview(formData)

    try {
      toast.success('Úspěšně odesláno.')
    } catch (error) {
      toast.error('Něco se pokazilo, zkuste to prosím později.')
    } finally {
      form.reset()
    }
  }

  return (
    <Container className='w-full sm:w-[60%] lg:w-[45%]'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className='h-full'
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
            <FormField
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {language === 'cz' && 'Jméno'}
                    {language === 'en' && 'Name'}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Pavel Novák'
                      {...field}
                      className='border-zinc-500'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name='text'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {language === 'cz' && 'Hodnocení'}
                    {language === 'en' && 'Rating'}
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Zde napište slovní hodnocení'
                      {...field}
                      className='border-zinc-500'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name='rating'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className='flex mt-3'>
                      {[...Array(5)].map((_, index) => (
                        <span
                          key={index}
                          onClick={() => handleStarClick(index)}
                          className='cursor-pointer'
                        >
                          {index < rating ? (
                            <AiFillStar className='w-6 h-6' />
                          ) : (
                            <AiOutlineStar className='w-6 h-6' />
                          )}
                        </span>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='pt-5'>
              <p className='text-sm text-zinc-600'>
                {language === 'cz' && (
                  <>
                    Kliknutím na Odeslat souhlasím se zpracováním osobních
                    údajů. Přečtěte si{' '}
                    <Link
                      href='/personal-data-protection'
                      className='underline'
                    >
                      GDPR
                    </Link>{' '}
                    pro více informací.
                  </>
                )}
                {language === 'en' && (
                  <>
                    By clicking on Submit I agree to the processing of personal
                    data. Read the{' '}
                    <Link
                      href='/personal-data-protection'
                      className='underline'
                    >
                      GDPR
                    </Link>{' '}
                    for more information.
                  </>
                )}
              </p>

              <Button type='submit' className='mt-1'>
                {language === 'cz' ? 'Odeslat' : 'Submit'}
              </Button>
            </div>
          </form>
        </Form>
      </motion.div>
    </Container>
  )
}
