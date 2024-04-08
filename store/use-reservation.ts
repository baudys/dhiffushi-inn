import { create } from 'zustand'

interface ReservationStore {
  roomId: string
  setRoomId: (roomId: string) => void
  name: string
  setName: (name: string) => void
  email: string
  setEmail: (name: string) => void
  telephone: string
  setTelephone: (name: string) => void
  message: string
  setMessage: (message: string) => void
  startDate: any
  setStartDate: (date: any) => void
  endDate: any
  setEndDate: (date: any) => void
  guests: number
  setGuests: (adults: any) => any
  priceCz: number
  setPriceCz: (price: number) => void
  priceEn: number
  setPriceEn: (price: number) => void
}

export const useReservation = create<ReservationStore>(set => ({
  roomId: '',
  setRoomId: roomId => set({ roomId }),
  name: '',
  setName: name => set({ name }),
  email: '',
  setEmail: email => set({ email }),
  telephone: '',
  setTelephone: telephone => set({ telephone }),
  message: '',
  setMessage: message => set({ message }),
  startDate: '',
  setStartDate: startDate => set({ startDate }),
  endDate: '',
  setEndDate: endDate => set({ endDate }),
  guests: 1,
  setGuests: guests => set({ guests }),
  priceCz: 0,
  setPriceCz: priceCz => set({ priceCz }),
  priceEn: 0,
  setPriceEn: priceEn => set({ priceEn }),
}))
