import React from 'react'

export default function Preloader() {
    return (
        <div>
            <div className="preloader d-flex align-items-center justify-content-center">
                <div className="spinner">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                </div>
            </div>
        </div>
    )
}
