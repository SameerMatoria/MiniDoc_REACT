import React, { useRef } from 'react';
import Card from './Card';
import EntryForm from './EntryForm';

function Foreground() {
    const ref = useRef(null);

    const data = [
        {
            id: 1,
            title: 'Title 1',
            description: 'wassup hommie how u doinnn....Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quod ipsum earum doloremque mollitia quibusdam debitis distinctio, possimus amet sapiente.'
        },
        {
            id: 2,
            title: 'Title 2',
            description: 'Hi There !'
        }
    ]

    return (
        <div>
            <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-screen flex gap-10 flex-wrap p-5'>
                {data.map((item, index) => (
                    <Card data={item} reference={ref} />
                ))}
                <EntryForm />
            </div>

        </div>

    );
}

export default Foreground;
