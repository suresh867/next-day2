import React from 'react'

const Main = () => {
    return (
        <>
            <main className='flex flex-col justify-center items-center bg-cover h-[95vh]' style={{
                backgroundImage: 'url("./hello.jpg")'
            }}>
                <div className='text-center py-2 md:w-6/12'>
                    <h1 className='first-letter:text-7xl first-letter:font-bold first-letter:text-red-600 text-white text-3xl font-mono'>
                        'Welcome to my website. Designed by Suresh..</h1>
                </div>
                <div className='flex justify-center px-5 py-3'>
                    <p className='text-white text-justify md:w-6/12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Ipsam, dolores iure totam rem explicabo eaque cupiditate libero vel, mollitia reiciendis,
                        ea accusantium rerum ipsum. Hic atque culp!
                    </p>
                </div>
                <button className='bg-[#59546C] w-44 h-10 border border-[#59546C] rounded-lg'>Our Services</button>
            </main>
        </>
    )
}

export default Main
