/* eslint-disable */
// @ts-nocheck
import React from 'react'

const BlockIcon = (props: any) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.475 5.16792L10.6 1.4062C10.4163 1.3047 10.2099 1.25146 10 1.25146C9.79013 1.25146 9.58369 1.3047 9.4 1.4062L2.525 5.16948C2.32866 5.27691 2.16477 5.43508 2.05043 5.62747C1.93609 5.81987 1.87551 6.03943 1.875 6.26323V13.7351C1.87551 13.9589 1.93609 14.1785 2.05043 14.3709C2.16477 14.5633 2.32866 14.7214 2.525 14.8289L9.4 18.5921C9.58369 18.6936 9.79013 18.7469 10 18.7469C10.2099 18.7469 10.4163 18.6936 10.6 18.5921L17.475 14.8289C17.6713 14.7214 17.8352 14.5633 17.9496 14.3709C18.0639 14.1785 18.1245 13.9589 18.125 13.7351V6.26402C18.1249 6.03981 18.0645 5.81976 17.9502 5.62692C17.8358 5.43407 17.6717 5.27554 17.475 5.16792ZM10 2.49995L16.2766 5.93745L10 9.37495L3.72344 5.93745L10 2.49995ZM3.125 7.0312L9.375 10.4515V17.1539L3.125 13.7359V7.0312ZM10.625 17.1539V10.4546L16.875 7.0312V13.7328L10.625 17.1539Z" fill={props.colour || 'white'} />
        </svg>

    )
}

export default BlockIcon