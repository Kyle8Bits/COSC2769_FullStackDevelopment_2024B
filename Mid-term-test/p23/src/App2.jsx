import React from 'react'
import CarPriceTable from './CarPriceTable'
import './style.css'

const cars = [

    {id: 1, name: 'Innova Cross', imported: true, price: 45000},
    
    {id: 2, name: 'VF9', imported: false, price: 60000},
    
    {id: 3, name: 'Santa Fe', imported: true, price: 50000},
    
    {id: 4, name: 'Outlander', imported: false, price: 40000},
    
    {id: 5, name: 'Mai Dang Khoa', imported: false, price: 65000}
]

function App2() {
    return(
        <>
            <CarPriceTable cars_list={cars}/>
        </>
    )
    
}

export default App2
