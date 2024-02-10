import { Button } from "../ui/button";
import Link from "next/link";

interface isNum {
    price: number;
}

const Section3: React.FC<isNum> = ({ price }) => {
    return (
        <>
            <div className=" bg-[#A499B3] flex flex-col">
                <div className='flex justify-evenly h-[20vh] md:h-[70vh] md:w-[100%] gap-2  p-5'>
                    <div className='flex flex-col'>
                        <img src="./hello.jpg" alt="image" className=' h-[100%] pb-3 md:w-[100%] rounded-lg ' />
                        <h4 className="font-bold font-serif text-l md:text-xl">Price -${price}</h4>
                    </div>
                    <div className='flex flex-col'>
                        <img src="./hello.jpg" alt="image" className='h-[100%] pb-3 md:w-[100%] rounded-lg' />
                        <h4 className="font-bold font-serif text-l md:text-xl">Price -${price}</h4>
                    </div>
                    <div className='flex flex-col'>
                        <img src="./hello.jpg" alt="image" className='h-[100%]  pb-3 md:w-[100%] rounded-lg' />
                        <h4 className="font-bold font-serif text-l md:text-xl">Price -${price}</h4>
                    </div>
                </div>
                <div className="p-3">
                    <Button variant="secondary" className="relative left-[75%] md:left-[90%] hover:bg-[#555] hover:text-white ">
                        <Link href="/Pricing" className="font-bold ">See more</Link>
                    </Button>
                </div>      
            </div>
        </>
    )
}

export default Section3
