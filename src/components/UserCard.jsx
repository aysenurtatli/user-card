import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from './Button'
import NavButton from './navButton';
import SocialMedia from './SocialMedia';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


function UserCard() {
    const [user, setUser] = useState(null)
    const [userId, setUserId] = useState(1)
    const [fade, setFade] = useState(true)

    useEffect(() => {
        setFade(false);
        setTimeout(() => {
            axios
                .get(`https://dummyjson.com/users/${userId}`)
                .then((response) => {
                    setUser(response.data);
                    setTimeout(() => setFade(true), 50)
                })
                .catch((error) => {
                    console.error(error)
                })
        }, 300)
    }, [userId])

    const handleNextUser = () => {
        setUserId((prevId) => (prevId < 30 ? prevId + 1 : 1));
    }

    const handlePrevUser = () => {
        setUserId((prevId) => (prevId < 30 ? prevId - 1 : 1));
    }


    return (
        <div className="w-full max-w-md bg-white shadow-md mx-auto text-white p-5 rounded-md dark:bg-teal-950">
            <div className='flex justify-between'>
                <NavButton Icon={FaArrowLeft} onClick={handlePrevUser}></NavButton>
                <NavButton Icon={FaArrowRight} onClick={handleNextUser}></NavButton>
            </div>
            {user ? (
                <div className='flex flex-col items-center text-gray-500 dark:text-teal-100'>
                    <div className={`transition-opacity duration-500 ease-in-out ${fade ? "opacity-100" : "opacity-0"} flex flex-col gap-2 items-center`}>
                        <img src={user.image} className='rounded-full shadow-lg mb-5' />
                        <h5 className='text-2xl font-semibold'>{user.firstName} {user.lastName}</h5>
                        <p className='text-sm'>{user.address.city}, {user.address.country}</p>
                        <span>{user.company.title}</span>
                        <SocialMedia />
                    </div>
                    <div className='flex gap-10 my-5'>
                        <Button text="Message" bgColor='bg-transparent'></Button>
                        <Button text="Contact"></Button>
                    </div>
                </div>
            ) : (<p className='text-center text-teal-200'>Loading...</p>)}
        </div>
    )
}

export default UserCard