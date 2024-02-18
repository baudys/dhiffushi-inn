import { client } from '@/sanity/lib/client'

function getCurrentDate() {
  const now = new Date()
  const year = now.getFullYear()
  let month = (now.getMonth() + 1).toString()
  let day = now.getDate().toString()

  month = month.length === 1 ? `0${month}` : month
  day = day.length === 1 ? `0${day}` : day

  return `${year}-${month}-${day}`
}

export async function addReview(reviewData: any) {
  try {
    const currentDate = getCurrentDate()

    const response = await client.create({
      _type: 'review',
      name: reviewData.name,
      text: reviewData.text,
      rating: reviewData.rating,
      date: currentDate,
    })

    console.log('Hodnocení bylo úspěšně přidáno k produktu.')

    return response
  } catch (error: any) {
    console.error('Chyba při přidávání hodnocení k produktu:', error.message)
  }
}
