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
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Textarea } from '@/components/ui/textarea'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { useState } from 'react'
import { addReview } from '@/actions/add-review'
import { Container } from '../container'
import { useLanguage } from '@/store/use-language'
import Link from 'next/link'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

export const AddReview = () => {
  const { language } = useLanguage()

  const schema = z.object({
    name: z.string({
      required_error:
        language === 'cz' ? 'Celé Jméno je povinné' : 'Full Name is required',
    }),
    text: z.string({
      required_error:
        language === 'cz' ? 'Hodnocení je povinné' : 'Rating is required',
    }),
  })

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  })

  const [rating, setRating] = useState<number>(1)

  const handleStarClick = (clickedIndex: any) => {
    setRating(clickedIndex + 1)
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    const formData = { ...data, rating }

    addReview(formData)

    try {
      toast.success(
        language === 'cz' ? 'Úspěšně odesláno.' : 'Sent successfully.'
      )
    } catch (error) {
      toast.error(
        language === 'cz'
          ? 'Něco se pokazilo, zkuste to prosím později.'
          : 'Something went wrong, please try again later.'
      )
    } finally {
      form.reset()
    }
  }

  return (
    <Drawer>
      <DrawerTrigger className='fixed bottom-5 max-lg:left-1/2 max-lg:-translate-x-1/2 lg:right-5 bg-cyan-500 hover:bg-cyan-600 p-4 rounded-md text-white font-bold  md:text-xl transition max-lg:w-[93vw]'>
        {language === 'cz' && 'Napište nám recenzi'}
        {language === 'en' && 'Write a review'}
      </DrawerTrigger>
      <DrawerContent>
        <Container className='w-full sm:w-[60%] lg:w-[45%]'>
          <DrawerHeader className='p-0 pb-10'>
            <DrawerTitle>
              {language === 'cz' && 'Napište recenzi'}
              {language === 'en' && 'Write a review'}
            </DrawerTitle>
          </DrawerHeader>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className='h-full'
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-3'
              >
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
                          rows={10}
                          placeholder='Zde napište slovní hodnocení'
                          {...field}
                          className='border-zinc-500 resize-none'
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
                                <AiFillStar className='w-6 h-6 fill-cyan-600' />
                              ) : (
                                <AiOutlineStar className='w-6 h-6 fill-cyan-600' />
                              )}
                            </span>
                          ))}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <DrawerFooter className='p-0 pt-8 pb-2'>
                  <p className='text-xs text-zinc-600'>
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
                        By clicking on Submit I agree to the processing of
                        personal data. Read the{' '}
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

                  <Button
                    type='submit'
                    className='bg-cyan-500 w-full hover:bg-cyan-600'
                  >
                    {language === 'cz' ? 'Odeslat' : 'Submit'}
                  </Button>
                </DrawerFooter>
              </form>
            </Form>
          </motion.div>

          <DrawerClose className='w-full mb-4'>
            <Button variant='outline' className='w-full'>
              {language === 'cz' ? 'Zrušit' : 'Cancel'}
            </Button>
          </DrawerClose>
        </Container>
      </DrawerContent>
    </Drawer>
  )
}
