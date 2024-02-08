interface isNum{
    price: number;
}

const Section3: React.FC<isNum> = ({ price }) => {
    return (
        <>
            <div className='flex justify-evenly h-[20vh] md:h-[70vh] md:w-[100%] gap-2 items-centerh  p-5 bg-[#A499B3]'>
                <div className='flex flex-col'>
                    <img src="./hello.jpg" alt="image" className=' h-[100%] pb-3 md:w-[100%] rounded-lg '/>
                    <h4 className="font-bold font-serif text-l md:text-xl">Price -${price}</h4>
                </div>
                <div className='flex flex-col'>
                    <img src="./hello.jpg" alt="image" className='h-[100%] pb-3 md:w-[100%] rounded-lg'/>
                    <h4 className="font-bold font-serif text-l md:text-xl">Price -${price}</h4>
                </div>
                <div className='flex flex-col'>
                    <img src="./hello.jpg" alt="image" className='h-[100%]  pb-3 md:w-[100%] rounded-lg'/>
                    <h4 className="font-bold font-serif text-l md:text-xl">Price -${price}</h4>
                </div>
            </div>
        </>
    )
}

export default Section3
