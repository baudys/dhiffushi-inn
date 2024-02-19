import { AddReview } from '@/components/reviews/add-review'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <AddReview />

      {children}
    </>
  )
}
