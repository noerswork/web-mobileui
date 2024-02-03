import React from 'react'

export default function page() {
  return (
    <div className='notification-wrapper'>
    <div className='top-nav-wrapper px-6 py-4 flex gap-2 items-center shadow-md'>
        <div className='arrow-back'>
            <a href='/'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            </a>
        </div>
        <div className='text-red-500 font-bold text-xl'>
            Notification
        </div>
    </div>
    <div className='notification-list mt-2'>
        <div className='notification-item px-4 py-2 flex gap-2 bg-sky-200'>
            <div className='icon-image'>
                <img className="w-14 h-14 rounded" src="https://via.placeholder.com/150/54176f" alt="Medium avatar"></img>
            </div>
            <div className='content flex-1'>
                <div className='content-title text-xs font-bold'>Reimbursement</div>
                <div className='content-desc text-xs'>lorem ipsum aibihbaibd ahbdbauygy shhhhhhhhh dhhhhhhhhhh jjjjjjjjjjjjjjjjjjj shaaaaaaaaaaaa</div>
            </div>
            <div className='time'>
                <span className='text-xs font-light'>Today</span>
            </div>
        </div>
        <div className='notification-item px-4 py-2 flex gap-2'>
            <div className='icon-image'>
                <img className="w-14 h-14 rounded" src="https://via.placeholder.com/150/b0f7cc" alt="Medium avatar"></img>
            </div>
            <div className='content flex-1'>
                <div className='content-title text-xs font-bold'>Reimbursement</div>
                <div className='content-desc text-xs'>lorem ipsum aibihbaibd ahbdbauygy shhhhhhhhh dhhhhhhhhhh jjjjjjjjjjjjjjjjjjj shaaaaaaaaaaaa</div>
            </div>
            <div className='time'>
                <span className='text-xs font-light'>Yesterday</span>
            </div>
        </div>
        <div className='notification-item px-4 py-2 flex gap-2'>
            <div className='icon-image'>
                <img className="w-14 h-14 rounded" src="https://via.placeholder.com/150/56a8c2" alt="Medium avatar"></img>
            </div>
            <div className='content flex-1'>
                <div className='content-title text-xs font-bold'>Reimbursement</div>
                <div className='content-desc text-xs'>lorem ipsum aibihbaibd ahbdbauygy shhhhhhhhh dhhhhhhhhhh jjjjjjjjjjjjjjjjjjj shaaaaaaaaaaaa</div>
            </div>
            <div className='time'>
                <span className='text-xs font-light'>Yesterday</span>
            </div>
        </div>
    </div>
    </div>
  )
}
