import React from 'react'

export default function Activity() {
    return (
        <div className='activity wrapper mt-4 px-6'>
            <div className='activity-title mb-2 text-base font-semibold'>Today's activity</div>
            <div className='activity-time flex'>
                <div className='activity-check-in text-center w-1/3'>
                    <div className='clock block'>
                        <svg style={{margin: "auto"}} className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <div className='time text-sm font-semibold'>08.30</div>
                    <div className='time-activity text-xs'>Check In</div>
                </div>
                <div className='activity-check-in text-center w-1/3'>
                    <div className='clock block'>
                        <svg style={{margin: "auto"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>

                    </div>
                    <div className='time text-sm font-semibold text-red-600'>03:00:00</div>
                    <div className='time-activity text-xs'>Working Hours</div>
                </div>
                <div className='activity-check-in text-center w-1/3'>
                    <div className='clock block'>
                        <svg style={{margin: "auto"}} className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <div className='time text-sm font-semibold'>--:--</div>
                    <div className='time-activity text-xs'>Check Out</div>
                </div>
            </div>
        </div>
    )
}
