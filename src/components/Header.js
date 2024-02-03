import React from 'react'

export default function Header() {
    return (
        <div className='header-wrapper flex flex-col px-6'>
            <div className='welcome-msg mb-2 text-base'>
                Hi, Good Morning!
            </div>
            <div className='profile-card w-full p-4 rounded-md text-white bg-gradient-to-br from-red-500 via-red-700 to-pink-700'>
                <div className='profile-content flex justify-between'>
                    <div className='profile-info flex flex-col justify-between gap-2'>
                        <div className='profile-image-name flex gap-2'>
                            <div className='profile-image'>
                                <img className='rounded-full w-14 h-14 object-cover' src='https://images.unsplash.com/photo-1633307375906-709ce1b7e9f3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                            </div>
                            <div className='profile-name'>
                                <div className='name font-semibold text-base'>Tabay</div>
                                <div className='role text-xs font-light italic'>UI/UX Designer</div>
                            </div>
                        </div>
                        <div className='profile-location'>
                            <div className='location-title text-xs font-light'>Location</div>
                            <div className='location-address text-sm'>Kantor Sahid</div>
                        </div>
                    </div>
                    <div className='member-section flex flex-col justify-between'>
                        <div className='member-info text-right'>
                            <div className='member-title text-xs font-light italic'>Member since</div>
                            <div className='member-date'>01 Juni 2021</div>
                        </div>
                        <div className='member-code text-xs font-light italic text-right'>ICO</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
