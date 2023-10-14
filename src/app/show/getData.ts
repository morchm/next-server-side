//Man kan ikke bruge useState eller useEffect i server-side, så man skal hente data fra Next's server.
export async function getData() {
    const res = await fetch("https://enemy.pages.dev/assets/data.json");
  
    // //Hver gang man kommer hen til denne side, 'show, siger man at den ikke skal cache hjemmesiden. 
    // {cache:"no-store"}
  
    // //Opdaterer cache hver 10-sekundt. (?- Er ikke sikker)
    // {next:{revalidate:10}}
  
    //For at lytte om dataen blive indlæst korrekt
    if (!res.ok) {
      throw new Error("failed");
    }
  
    // Returnerer vores data som json
    return res.json();

  }

  //Med denne separate data-fil kan vi hente flere dataer:
  export const moreData = async () => {
    const res = await fetch("https://enemy.pages.dev/assets/animals.json");

    if (!res.ok) {
        throw new Error("failed");
      }

      return res.json();
  }
 

  //Data fra en random hjemmeside jeg fandt
  export const dummyData = async() => {
    const res = await fetch ("https://dummyjson.com/products");

    if(!res.ok) {
        throw new Error("failed");
    }
    
    return res.json();
  }