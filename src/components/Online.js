import React from 'react'
import { data } from '@/utils/data'

export default function Online() {
    const { users } = data;
    return (
    <div className='online-wrapper mt-4 px-6'>
        <div className='online-title mb-2 text-base font-semibold'>Online</div>
        <div className='online-list p-2 border-2 rounded-md shadow-md'>
        <div className="flex -space-x-2 rtl:space-x-reverse justify-center">
            {
                users.map((user)=>(
                    <div className='online-people text-center' key={user.id}>
                        <img className="w-10 h-10 border-2 border-white rounded-full object-cover dark:border-gray-800" src={user.image} alt={user.image} />
                        <div className='people-name text-[10px] font-semibold'>{user.name}</div>
                        <div className='people-location text-[10px]'>{user.location}</div>
                    </div>
                ))
            }
            <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white text-center bg-gradient-to-br from-red-500 via-red-700 to-pink-700 border-2 border-white rounded-full hover:bg-red-600" href="#">10+</a>
        </div>
        </div>
    </div>
  )
}
