import { cn } from '@/lib/utils'
import { FC, PropsWithChildren } from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  className,
}) => (
  <div
    className={cn(
      '2xl:max-w-screen-xl lg:max-w-screen-lg mx-auto px-4',
      className
    )}
  >
    {children}
  </div>
)
