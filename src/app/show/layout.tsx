//Hvis man ikke vil have, at sin side bliver cachet, skal man ikke lave et layout, men en "template"
//Det er godt at have noget statisk i et layout, når det bliver cachet. Noget, som ikke forandre sig. 
//At cache er en god nok ting at have, så brugeren ikke behøver at skulle vente for længe, når man reloader hjemmesiden igen mellem de forskellige undersider

export const metadata = {
  title: "show",
  description: "Show some data",
};

export default function show({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <h2>Headline for show</h2>
      </header>
      {children}
      <footer>
        <h3>a footer</h3>
      </footer>
    </>
  );
}
