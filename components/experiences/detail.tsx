interface Props {
  experience: any
}

export const Detail = ({ experience }: Props) => {
  return (
    <main>
      <h1>{experience.name}</h1>
    </main>
  )
}
