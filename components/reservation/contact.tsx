'use client'

import { useLanguage } from '@/store/use-language'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Container } from '../container'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { toast } from 'sonner'
import { Textarea } from '../ui/textarea'
import { addReservation } from '@/actions/add-reservation'
import { useReservation } from '@/store/use-reservation'

export const Contact = () => {
  const { language } = useLanguage()
  const { roomId, adults, children, endDate, startDate, priceCz, priceEn } =
    useReservation()

  const schema = z.object({
    name: z.string({
      required_error:
        language === 'cz' ? 'Celé Jméno je povinné' : 'Full Name is required',
    }),
    email: z
      .string({
        required_error:
          language === 'cz' ? 'E-mail je povinný' : 'E-mail is required',
      })
      .email({
        message: language === 'cz' ? 'Neplatný E-mail' : 'Invalid E-mail',
      }),
    phone: z.string({
      required_error:
        language === 'cz'
          ? 'Telefonní číslo je povinné'
          : 'Phone number is required',
    }),
    message: z.optional(z.string()),
  })

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    let reservationData

    if (language === 'cz') {
      reservationData = {
        ...data,
        adults,
        children,
        startDate,
        endDate,
        priceCz,
      }
    }
    if (language === 'en') {
      reservationData = {
        ...data,
        adults,
        children,
        startDate,
        endDate,
        priceEn,
      }
    }

    addReservation(roomId, reservationData)

    try {
      const emailResponse = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID_CREATORS!,
        data,
        process.env.NEXT_PUBLIC_PUBLIC_API!
      )

      console.log(emailResponse)

      toast.success(
        language === 'cz' ? 'Úspěšně odesláno.' : 'Sent Successfully.'
      )
    } catch (error) {
      console.log('Error sending email:', error)

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
    <section className='min-h-[80vh] order-2 md:order-1'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className='h-full'
      >
        <Container>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
              <FormField
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {language === 'cz' ? '* Celé Jméno' : '* Full Name'}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='John Doe'
                        {...field}
                        className='border-zinc-600'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>* E-Mail</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='email@email.com'
                        {...field}
                        className='border-zinc-600'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name='phone'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {language === 'cz'
                        ? '* Telefonní Číslo'
                        : '* Phone Number'}
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='text'
                        placeholder='+420 123 456 789'
                        {...field}
                        className='border-zinc-600'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {language === 'cz' ? 'Zpráva' : 'Message'}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={10}
                        placeholder={
                          language === 'cz'
                            ? 'Napadá Vás něco?'
                            : 'Do you have something on your mind?'
                        }
                        {...field}
                        className='border-zinc-600 resize-none'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className='pt-8'>
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
                  className='mt-1 w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600'
                >
                  {language === 'cz' ? 'Odeslat' : 'Submit'}
                </Button>
              </div>
            </form>
          </Form>
        </Container>
      </motion.div>
    </section>
  )
}
