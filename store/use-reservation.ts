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
  dining: string
  setDining: (dining: any) => void
  price: number
  setPrice: (price: number) => void
  view: string
  setView: (view: string) => void
  roomName: string
  setRoomName: (roomName: string) => void
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
  price: 0,
  setPrice: price => set({ price }),
  dining: '',
  setDining: dining => set({ dining }),
  view: '',
  setView: view => set({ view }),
  roomName: '',
  setRoomName: roomName => set({ roomName }),
}))
