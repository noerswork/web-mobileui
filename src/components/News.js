import React from 'react'

export default function News() {
    return (
        <div className='news-wrapper mt-4 px-6'>
            <div className='news-title mb-2 text-base font-semibold '>PCS News</div>
            <div className='news-slider'>
                <div className='slider margin-auto border rounded-md w-[300px] h-[150px] p-4 shadow-md margin-auto'>
                    <div className='info flex justify-between'>
                        <div className='author flex gap-2 items-center'>
                            <img className='rounded-full w-8 h-8 object-cover' src='https://images.unsplash.com/photo-1633307375906-709ce1b7e9f3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                            <div className='author-name text-xs font-semibold text-red-600'>Ana Riswati</div>
                        </div>
                        <div className='published text-right'>
                            <div className='plublished-day text-xs'>Senin</div>
                            <div className='published-date text-xs'>30 Mei 2024</div>
                        </div>
                    </div>
                    <div className='news-content mt-4'>
                        <p className='text-xs'>Lorem ipsum</p>
                        <p className='text-xs'>Lorem ipsum</p>
                        <p className='text-xs'>Lorem ipsum</p>
                        <p className='text-xs'>Lorem ipsum</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
