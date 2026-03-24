export default function Section({ title, children, id }) {
  return (
    <section id={id} style={{ height:'100vh', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column' }}>
      <div style={{ maxWidth:'900px', textAlign:'center', padding:'2em' }}>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </section>
  );
}