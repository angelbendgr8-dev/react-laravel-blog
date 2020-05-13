
import LoadingScreen from 'react-loading-screen';

import React from 'react'

export default function Loading({text}) {
    return (
        <LoadingScreen
            loading={true}
            bgColor='#f1f1f1'
            spinnerColor='#9ee5f8'
            textColor='#676767'
            logoSrc='/logo.png'
            text={text}
       /> 
    )
}
