import React from 'react'
//Import styles
import styles from './DialogContentComponent.module.css'
//Import mui components
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider';
//Import own components
import AgeSelectGrid from './AgeSelectGrid/AgeSelectGrid';
import HeaderContentGrid from './HeaderContentGrid/HeaderContentGrid';
import PassangerTypeGrid from './PassangerTypeGrid/PassangerTypeGrid';

const passangerTypes = [
    { key: 1, title: 'Adultos', passangerType: 'adults' },
    { key: 2, title: 'Niños', passangerType: 'children' },
]

export default function DialogContentComponent(pageProps) {
    const { data, setData = () => { }, listRoomRef } = pageProps;

    return (
        <>
            {data.map((room, index) => (
                <Grid key={index} ref={listRoomRef} container spacing={2} alignItems="center" className='pb-4'>
                    <HeaderContentGrid
                        data={data}
                        index={index}
                        setData={setData}
                        roomDelete={room.delete} />

                    {passangerTypes.map(type => (
                        <PassangerTypeGrid
                            key={type.key}
                            title={type.title}
                            room={room}
                            data={data}
                            index={index}
                            setData={setData}
                            passangerType={type.passangerType} />
                    ))}


                    {[...Array(room.children).keys()].map(childIndex => (
                        <AgeSelectGrid
                            key={childIndex}
                            data={data}
                            index={index}
                            room={room}
                            setData={setData}
                            childIndex={childIndex} />
                    ))}

                    <Grid item xs={12}>
                        <Divider className='my-2' />
                    </Grid>
                </Grid>
            ))}
        </>
    )
}
