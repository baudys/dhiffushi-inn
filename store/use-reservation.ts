import { create } from 'zustand'

interface ReservationStore {
  name: string
  setName: (name: string) => void
  email: string
  setEmail: (name: string) => void
  telephone: string
  setTelephone: (name: string) => void
  startDate: any
  setStartDate: (date: any) => void
  endDate: any
  setEndDate: (date: any) => void
  adults: number
  setAdults: (adults: number) => void
  children: number
  setChildren: (children: number) => void
  priceCz: number
  setPriceCz: (price: number) => void
  priceEn: number
  setPriceEn: (price: number) => void
}

export const useReservation = create<ReservationStore>(set => ({
  name: '',
  setName: name => set({ name }),
  email: '',
  setEmail: email => set({ email }),
  telephone: '',
  setTelephone: telephone => set({ telephone }),
  startDate: '',
  setStartDate: startDate => set({ startDate }),
  endDate: '',
  setEndDate: endDate => set({ endDate }),
  adults: 1,
  setAdults: adults => set({ adults }),
  children: 0,
  setChildren: children => set({ children }),
  priceCz: 0,
  setPriceCz: priceCz => set({ priceCz }),
  priceEn: 0,
  setPriceEn: priceEn => set({ priceEn }),
}))
