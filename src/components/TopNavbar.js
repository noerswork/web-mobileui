'use client';
import React from 'react'

export default function TopNavbar() {
    return (
        <div className='top-nav-wrapper px-6 py-4 flex justify-between'>
            <div className='app-logo text-red-500 font-bold text-xl'>
                KerjaYuk!
            </div>
            <div className='notif-wrapper'>
                <a href='/notifications' className='notif-logo relative'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                    <span className="badge absolute rounded-full bg-red-500 p-[4px] top-[-1px] left-[12px]"></span>
                </a>
            </div>
        </div>
    )
}
