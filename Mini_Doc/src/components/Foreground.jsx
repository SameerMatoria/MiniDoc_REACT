import React, { useRef, useState, useEffect } from 'react';
import Card from './Card';
import EntryForm from './EntryForm';

function Foreground() {
    const ref = useRef(null);

    const [data, setData] = useState(() => {
        const storedData = localStorage.getItem('cardData');
        return storedData ? JSON.parse(storedData) : [
            {
                id: 1,
                title: 'Example Card',
                description: 'Create new card by clicking on the Add+ button '
            }
        ];
    });

    useEffect(() => {
        localStorage.setItem('cardData', JSON.stringify(data));
    }, [data]);

    const addNewEntry = (newEntry) => {
        setData([...data, { ...newEntry, id: data.length + 1 }]); 
    };
    const deleteCard = (id) => {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
    };
    

    return (
        <div>
            <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-screen flex gap-10 flex-wrap p-5'>
                {data.map((item) => (
                    <Card key={item.id} data={item} reference={ref} onDelete={() => deleteCard(item.id)} />
                ))}
                <EntryForm addNewEntry={addNewEntry} />
            </div>
        </div>
    );
}

export default Foreground;
