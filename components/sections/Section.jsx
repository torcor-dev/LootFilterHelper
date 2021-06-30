export default function Section({ children, name }) {
  return (
    <section id={name}>
      <h2>{name}</h2>
      { children }
    </section>
  )
}
