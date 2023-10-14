//Her arbejder vi med sekventiel data-fetching, der viser data før alt andet data på en hjemmeside.
// Man bruger noget der hedder Suspense-Boundary til at gøre dette.

interface Animals{
    data:Ar[];
}

interface Ar{
    img: string;
    text: string;
}

const AnimalData = ({promise}:{promise:Animals}) => {
    return(
        <>
            {promise &&
                promise.data.map((item:Ar, index:number)=>(
                    <div>{item.text}</div>
                ))
            }
        </>
    )
}

export default AnimalData;