import React from 'react'

const Section2 = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row justify-around bg-[#D8E2DC] p-5  h-fit-content'>
                <img src="./hello.jpg" alt="image" className='w-[100%] h-[50%] bg-[#ccc] float-left bg-content rounded-lg' />
                <div className='flex flex-col md:px-5'>
                    <h3 className='p-3 my-2 font-bold text-2xl md:px-0 md:py-1'>Introduce Yourself</h3>
                    <p className='md:text-justify w-full font-serif md:pb-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum incidunt
                        non voluptatibus commodi, excepturi rem praesentium quo vel at possimus
                        ipsam expedita alias, assumenda, fugiat quae aperiam sit accusantium cupiditate.
                    </p>
                    <button className='p-3 border-2 rounded-lg text-white bg-[#333]'>About Us</button>
                </div>
            </div>

        </>
    )
}

export default Section2
