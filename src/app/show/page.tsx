//Error bliver vist i kommandoprompt(Terminal) i stedet for i en console.log når man bruger server-side.
//Hold terminalen åben i et andet vindue(fx Powershell-vindue) for at holde øje med fejl.
import { getData } from "@/app/show/getData"

const Page = async () => {
  const data = await getData();
//   console.log(data);
  return (
    <>
    { data &&
    //Bruger item:any, fordi vi ikke har brugt export interface et andet sted
    data.content.map((item:any)=>(
        <div>{item.name}</div>
    ))
    }
    </>
    );
};

export default Page;
