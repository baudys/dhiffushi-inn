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
        language === 'cz' ? 'Celé Jméno z je povinné' : 'Full Name is required',
    }),
    email: z
      .string({
        required_error:
          language === 'cz' ? 'E-mail je povinn ' : 'E-mail is required',
      })
      .email({
        message: language === 'cz' ? 'Neplatný E-mail' : 'Invalid E-mail',
      }),
    instagram: z.string({
      required_error:
        language === 'cz'
          ? 'Uživatelské jméno z Instagramu je povinné'
          : 'Instagram username is required',
    }),
    instagram_followers: z.string({
      required_error:
        language === 'cz'
          ? 'Počet Sledujících je povinný'
          : 'Number of Followers is required',
    }),
    tiktok: z.string({
      required_error:
        language === 'cz'
          ? 'Uživatelské jméno z TikToku je povinné'
          : 'TikTok username is required',
    }),
    tiktok_followers: z.string({
      required_error:
        language === 'cz'
          ? 'Počet Sledujících je povinný'
          : 'Number of Followers is required',
    }),
    facebook: z.string({
      required_error:
        language === 'cz'
          ? 'Uživatelské jméno z Facebooku je povinné'
          : 'Facebook username is required',
    }),
    facebook_followers: z.string({
      required_error:
        language === 'cz'
          ? 'Počet Sledujících je povinný'
          : 'Number of Followers is required',
    }),
    youtube: z.string({
      required_error:
        language === 'cz'
          ? 'Uživatelské jméno z YouTube je povinné'
          : 'YouTube username is required',
    }),
    youtube_followers: z.string({
      required_error:
        language === 'cz'
          ? 'Počet Sledujících je povinný'
          : 'Number of Followers is required',
    }),
    web: z
      .string({
        required_error:
          language === 'cz'
            ? 'Odkaz na web je povinný'
            : 'Web link is required',
      })
      .url({
        message: language === 'cz' ? 'Neplatný odkaz' : 'Invalid link',
      }),
    message: z
      .string({
        required_error:
          language === 'cz' ? 'Zpráva je povinná' : 'Message is required',
      })
      .min(60, {
        message:
          language === 'cz'
            ? 'Zpráva musí mít alespoň 60 znaků'
            : 'The message must be at least 60 characters long',
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
              <div className='flex gap-2 w-full'>
                <FormField
                  name='instagram'
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormLabel>
                        {language === 'cz'
                          ? '* Instagram Účet'
                          : '* Instagram Account'}
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
                          : '* Followers'}
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
                          : '* TikTok Account'}
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
                          : '* Followers'}
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
                          : '* Facebook Account'}
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
                          : '* Followers'}
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
                          : '* YouTube Account'}
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
                          : '* Followers'}
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
                        : '* Website Link'}
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
                        : '* Reason for Visiting'}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={10}
                        placeholder={
                          language === 'cz'
                            ? 'Proč byste chtěli navštívit Dhiffushi-Inn?'
                            : 'Why would you like to visit Dhiffushi-Inn?'
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
                  className='mt-1 w-full sm:w-auto bg-cyan-600 hover:bg-cyan-700'
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

export default Contact
