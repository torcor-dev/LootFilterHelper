export default function Section({ children, name }) {
  return (
    <section id={name} className="mt-2 mb-6">
      <h2>{name}</h2>
      { children }
    </section>
  )
}
