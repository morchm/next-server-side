//Error bliver vist i kommandoprompt(Terminal) i stedet for i en console.log når man bruger server-side.
//Hold terminalen åben i et andet vindue(fx Powershell-vindue) for at holde øje med fejl.
import { getData } from "@/app/show/getData";
import { moreData } from "@/app/show/getData";
import { dummyData } from "@/app/show/getData";

//Sekventiel data-fetching:
import { Suspense } from "react";
import AnimalData from "@/app/AnimalData";


const Page = async () => {
  const data = await getData();
  const extraData = await moreData();
  const evenMoreData = await dummyData();

//   const [dataA, dataB, dataC] = await Promise.all([data, extraData, evenMoreData]);

  //   console.log(data);

  return (
      <>
    {/* For sekventiel data-fetching */}
          {/* {dataA &&
          //Bruger item:any, fordi vi ikke har brugt export interface et andet sted
          dataA.content.map((item: any) => <div>{item.name}</div>)
          }
    
          {dataB &&
              dataB.data.map((item:any, index:number)=> (
                  <div>{item.text}</div>
              ))
          }
    
          {dataC &&
              dataC.products.map((item:any, index:number)=>(
                  <div>{item.title}</div>
              ))
          } */}
    
    {/* Efter sekventiel data-fetching */}
        {data &&
            data.content.map((item:any, index:number) =>(
                <div>{item.name}</div>
            ))
        }

        <Suspense fallback = {<div>Loading...</div>}>
            <AnimalData promise={extraData}></AnimalData>
        </Suspense>



    </>
  );
};

export default Page;
