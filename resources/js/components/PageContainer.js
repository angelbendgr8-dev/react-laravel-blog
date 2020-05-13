import React from 'react'
import Index from './pages/Index'
import Sidebar from './layouts/Sidebar'

export default function PageContainer() {
    return (
        <div>
            <section className="mag-posts-area d-flex flex-wrap">

                <Index/>
                {/* <!-- >>>>>>>>>>>>>>>>>>>>
                    Post Right Sidebar Area
                    <<<<<<<<<<<<<<<<<<<<< --> */}
               <Sidebar/>
            </section>
        </div>
    )
}
