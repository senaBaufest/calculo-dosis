import React, { useState, } from 'react';

import CalculateDosis from './../organisms/CalculateDosis';

const CalculateDosisTemplate = () => {

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
               <CalculateDosis />
            </div>
        </>
    )
}

export default CalculateDosisTemplate