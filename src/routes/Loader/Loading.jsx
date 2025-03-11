import React from 'react'

function Loading() {
    return (
        <div className="flex min-h-screen justify-center items-center relative z-50">
            <span className="loading loading-ring loading-xs"></span>
        </div>
    );
}

export default Loading