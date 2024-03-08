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
  priceCz: string
  setPriceCz: (price: string) => void
  priceEn: string
  setPriceEn: (price: string) => void
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
  priceCz: '',
  setPriceCz: priceCz => set({ priceCz }),
  priceEn: '',
  setPriceEn: priceEn => set({ priceEn }),
}))
