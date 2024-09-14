import React from 'react'

function CarPriceTable({cars_list}) {
    const displayCars = cars_list.map((car) => {
        let percent = '5%'
        let fee = 0.05;
        if(car.imported){
            fee = 0.1;
            percent = '10%'
        }

        let total = parseInt(car.price*(1+fee));

        return(
            <>
            <tr>
                <td>{car.id}</td>
                <td>{car.name}</td>
                <td>{car.imported ? 'Imported' : 'Domestic'}</td>
                <td>{car.price}</td>
                <td>{percent}</td>
                <td>{total}</td>
            </tr>
            </>
        )
    });

  return (
    <div>
      <table className='table'>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Imported</th>
            <th>Price</th>
            <th>Registration Fee</th>
            <th>Total</th>
        </tr>
            {displayCars}
      </table>
    </div>
  )
}

export default CarPriceTable
