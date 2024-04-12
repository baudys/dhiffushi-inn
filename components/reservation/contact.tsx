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
  const { roomId, guests, endDate, startDate, price, dining, view, roomName } =
    useReservation()

  const schema = z.object({
    name: z.string({
      required_error:
        language === 'cz'
          ? 'Celé Jméno je povinné'
          : language === 'en'
          ? 'Full Name is required'
          : 'Полное имя обязательно',
    }),
    email: z
      .string({
        required_error:
          language === 'cz'
            ? 'E-mail je povinný'
            : language === 'en'
            ? 'E-mail is required'
            : 'Электронная почта обязательна',
      })
      .email({
        message:
          language === 'cz'
            ? 'Neplatný E-mail'
            : language === 'en'
            ? 'Invalid E-mail'
            : 'Неверный e-mail',
      }),
    phone: z.string({
      required_error:
        language === 'cz'
          ? 'Telefonní číslo je povinné'
          : language === 'en'
          ? 'Phone number is required'
          : 'Номер телефона обязателен',
    }),
    message: z.optional(z.string()),
  })

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    let reservationData

    reservationData = {
      ...data,
      guests,
      dining,
      view,
      roomName,
      startDate,
      endDate,
      price,
    }

    addReservation(roomId, reservationData)

    try {
      const emailResponse = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID_RESERVATION!,
        reservationData,
        process.env.NEXT_PUBLIC_PUBLIC_API!
      )

      console.log(emailResponse)

      toast.success(
        language === 'cz'
          ? 'Úspěšně odesláno.'
          : language === 'en'
          ? 'Sent Successfully.'
          : 'Отправлено успешно.'
      )
    } catch (error) {
      console.log('Error sending email:', error)

      toast.error(
        language === 'cz'
          ? 'Něco se pokazilo, zkuste to prosím později.'
          : language === 'en'
          ? 'Something went wrong, please try again later.'
          : 'Что-то пошло не так, пожалуйста, повторите попытку позже.'
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
                      {language === 'cz' && '* Celé Jméno'}
                      {language === 'en' && '* Full Name'}
                      {language === 'ru' && '* Полное имя'}
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
                      {language === 'cz' && '* Telefonní Číslo'}
                      {language === 'en' && '* Phone Number'}
                      {language === 'ru' && '* Номер телефона'}
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
                      {language === 'cz' && 'Zpráva'}
                      {language === 'en' && 'Message'}
                      {language === 'ru' && 'Отчет'}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={10}
                        placeholder={
                          language === 'cz'
                            ? 'Napadá Vás něco?'
                            : language === 'en'
                            ? 'Do you have something on your mind?'
                            : 'У вас есть что-то на уме?'
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
                  {language === 'ru' && (
                    <>
                      Нажимая на кнопку Отправить, я даю согласие на обработку
                      персональных данных. Прочитать{' '}
                      <Link
                        href='/personal-data-protection'
                        className='underline'
                      >
                        GDPR
                      </Link>{' '}
                      для получения дополнительной информации.
                    </>
                  )}
                </p>

                <Button
                  type='submit'
                  className='mt-1 w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600'
                >
                  {language === 'cz' && 'Odeslat'}
                  {language === 'en' && 'Submit'}
                  {language === 'ru' && 'Отправить'}
                </Button>
              </div>
            </form>
          </Form>
        </Container>
      </motion.div>
    </section>
  )
}
