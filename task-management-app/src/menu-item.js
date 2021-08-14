import React, {useState, useEffect} from 'react';

function MenuItem(props) {
    return (
        <>
            <li className={'text-gray-300'}>{props.menuItemText}</li>
        </>
    );
}

export default MenuItem;