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

const Contact = () => {
  const { language } = useLanguage()

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
    instagram: z.string({
      required_error:
        language === 'cz'
          ? 'Uživatelské jméno z Instagramu je povinné'
          : language === 'en'
          ? 'Instagram username is required'
          : 'Имя пользователя Instagram обязательно',
    }),
    instagram_followers: z.string({
      required_error:
        language === 'cz'
          ? 'Počet Sledujících je povinný'
          : language === 'en'
          ? 'Number of Followers is required'
          : 'Количество подписчиков обязательно',
    }),
    tiktok: z.string({
      required_error:
        language === 'cz'
          ? 'Uživatelské jméno z TikToku je povinné'
          : language === 'en'
          ? 'TikTok username is required'
          : 'Имя пользователя TikTok обязательно',
    }),
    tiktok_followers: z.string({
      required_error:
        language === 'cz'
          ? 'Počet Sledujících je povinný'
          : language === 'en'
          ? 'Number of Followers is required'
          : 'Количество подписчиков обязательно',
    }),
    facebook: z.string({
      required_error:
        language === 'cz'
          ? 'Uživatelské jméno z Facebooku je povinné'
          : language === 'en'
          ? 'Facebook username is required'
          : 'Имя пользователя Facebook обязательно',
    }),
    facebook_followers: z.string({
      required_error:
        language === 'cz'
          ? 'Počet Sledujících je povinný'
          : language === 'en'
          ? 'Number of Followers is required'
          : 'Количество подписчиков обязательно',
    }),
    youtube: z.string({
      required_error:
        language === 'cz'
          ? 'Uživatelské jméno z YouTube je povinné'
          : language === 'en'
          ? 'YouTube username is required'
          : 'Имя пользователя YouTube обязательно',
    }),
    youtube_followers: z.string({
      required_error:
        language === 'cz'
          ? 'Počet Sledujících je povinný'
          : language === 'en'
          ? 'Number of Followers is required'
          : 'Количество подписчиков обязательно',
    }),
    web: z
      .string({
        required_error:
          language === 'cz'
            ? 'Odkaz na web je povinný'
            : language === 'en'
            ? 'Web link is required'
            : 'Необходима веб-ссылка',
      })
      .url({
        message:
          language === 'cz'
            ? 'Neplatný odkaz'
            : language === 'en'
            ? 'Invalid link'
            : 'Недопустимая ссылка',
      }),
    message: z
      .string({
        required_error:
          language === 'cz'
            ? 'Zpráva je povinná'
            : language === 'en'
            ? 'Message is required'
            : 'Сообщение обязательно',
      })
      .min(60, {
        message:
          language === 'cz'
            ? 'Zpráva musí mít alespoň 60 znaků'
            : language === 'en'
            ? 'The message must be at least 60 characters long'
            : 'Сообщение должно содержать не менее 60 символов',
      }),
  })

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    console.log(data)

    try {
      const emailResponse = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID_CREATORS!,
        data,
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
          ? 'Něco se pokazilo, zkus to prosím později.'
          : language === 'en'
          ? 'Something went wrong, please try again later.'
          : 'Что-то пошло не так, пожалуйста, повторите попытку позже.'
      )
    } finally {
      form.reset()
    }
  }

  return (
    <section className='min-h-[80vh]'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className='h-full'
      >
        <Container className='grid place-content-center h-full w-full sm:w-[60%] lg:w-[45%]'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
              <FormField
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {language === 'cz'
                        ? '* Celé Jméno'
                        : language === 'en'
                        ? '* Full Name'
                        : '* Полное имя'}
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
              <div className='flex gap-2 w-full'>
                <FormField
                  name='instagram'
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormLabel>
                        {language === 'cz'
                          ? '* Instagram Účet'
                          : language === 'en'
                          ? '* Instagram Account'
                          : '* Аккаунт в Instagram'}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder='@username'
                          {...field}
                          className='border-zinc-600'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name='instagram_followers'
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormLabel>
                        {language === 'cz'
                          ? '* Počet Sledujících'
                          : language === 'en'
                          ? '* Followers'
                          : '* Последователи'}
                      </FormLabel>
                      <FormControl>
                        <Input
                          type='number'
                          placeholder='0'
                          {...field}
                          className='border-zinc-600'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='flex gap-2 w-full'>
                <FormField
                  name='tiktok'
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormLabel>
                        {language === 'cz'
                          ? '* TikTok Účet'
                          : language === 'en'
                          ? '* TikTok Account'
                          : '* Аккаунт TikTok'}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder='@username'
                          {...field}
                          className='border-zinc-600'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name='tiktok_followers'
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormLabel>
                        {language === 'cz'
                          ? '* Počet Sledujících'
                          : language === 'en'
                          ? '* Followers'
                          : '* Последователи'}
                      </FormLabel>
                      <FormControl>
                        <Input
                          type='number'
                          placeholder='0'
                          {...field}
                          className='border-zinc-600'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='flex gap-2 w-full'>
                <FormField
                  name='facebook'
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormLabel>
                        {language === 'cz'
                          ? '* Facebook Účet'
                          : language === 'en'
                          ? '* Facebook Account'
                          : '* Учетная запись Facebook'}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder='@username'
                          {...field}
                          className='border-zinc-600'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name='facebook_followers'
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormLabel>
                        {language === 'cz'
                          ? '* Počet Sledujících'
                          : language === 'en'
                          ? '* Followers'
                          : '* Последователи'}
                      </FormLabel>
                      <FormControl>
                        <Input
                          type='number'
                          placeholder='0'
                          {...field}
                          className='border-zinc-600'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='flex gap-2 w-full'>
                <FormField
                  name='youtube'
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormLabel>
                        {language === 'cz'
                          ? '* YouTube Účet'
                          : language === 'en'
                          ? '* YouTube Account'
                          : '* Аккаунт YouTube'}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder='@username'
                          {...field}
                          className='border-zinc-600'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name='youtube_followers'
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormLabel>
                        {language === 'cz'
                          ? '* Počet Sledujících'
                          : language === 'en'
                          ? '* Followers'
                          : '* Последователи'}
                      </FormLabel>
                      <FormControl>
                        <Input
                          type='number'
                          placeholder='0'
                          {...field}
                          className='border-zinc-600'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                name='web'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {language === 'cz'
                        ? '* Odkaz na Webovou stránku'
                        : language === 'en'
                        ? '* Website Link'
                        : '* Ссылка на сайт'}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='https://dhiffushiinn.com'
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
                      {language === 'cz'
                        ? '* Důvod Návštěvy'
                        : language === 'en'
                        ? '* Reason for Visiting'
                        : '* Причина визита'}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={10}
                        placeholder={
                          language === 'cz'
                            ? 'Proč chceš navštívit Dhiffushi-Inn?'
                            : language === 'en'
                            ? 'Why would you like to visit Dhiffushi-Inn?'
                            : 'Почему вы хотите посетить Dhiffushi-Inn?'
                        }
                        {...field}
                        className='border-zinc-600'
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
                      údajů. Přečti si{' '}
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
                      Нажимая на кнопку "Отправить", я даю согласие на обработку
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

export default Contact
