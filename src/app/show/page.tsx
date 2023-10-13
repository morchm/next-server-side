//Error bliver vist i kommandoprompt(Terminal) i stedet for i en console.log når man bruger server-side.
//Hold terminalen åben i et andet vindue(fx Powershell-vindue) for at holde øje med fejl.
import { getData } from "@/app/show/getData";
import { moreData } from "@/app/show/getData";
import { dummyData } from "@/app/show/getData";

const Page = async () => {
  const data = getData();
  const extraData = moreData();
  const evenMoreData = dummyData();

  const [dataA, dataB, dataC] = await Promise.all([data, extraData, evenMoreData]);

  //   console.log(data);

  return (
    <>
        {dataA &&
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
        }
    </>
  );
};

export default Page;
