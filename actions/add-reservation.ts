import { client } from '@/sanity/lib/client'

export async function addReservation(roomId: string, data: any) {
  try {
    const room = await client.getDocument(roomId)

    let updatedReservations: any[]

    if (!room || !Array.isArray(room.reservations)) {
      updatedReservations = [data]
    } else {
      updatedReservations = [...room.reservations, data]
    }

    await client
      .patch(roomId)
      .set({ reservations: updatedReservations })
      .commit({ autoGenerateArrayKeys: true })

    console.log('Rezervace přidána')
  } catch (error: any) {
    console.error('Chyba při přidávání rezervace', error.message)
  }
}
