import React from 'react';

const BeerTableRow = ({ beer }) =>{
    return(
        <tr>
            <td>{beer.id}</td>
            <td>{beer.name}</td>
            <td>{beer.tagline}</td>
            <td>{beer.first_brewed}</td>
            <td className='increase-width'>{beer.description}</td>
            <td><a href={beer.image_url} target='_blank'>{beer.image_url}</a></td>
            <td>{beer.abv}</td>
            <td>{beer.ibu}</td>
            <td>{beer.target_fg}</td>
            <td>{beer.target_og}</td>
            <td>{beer.ebc}</td>
            <td>{beer.srm}</td>
            <td>{beer.ph}</td>
            <td>{beer.attenuation_level}</td>
            <td>{beer.volume?.value}</td>
            <td>{beer.boil_volume?.value}</td>
            <td>{beer.method?.twist ? beer.method?.twist : 'null'}</td>
            <td>{beer.ingredients?.yeast}</td>
            <td><ul>{beer.food_pairing.map((item) => <li key={item}>{item}</li>)} </ul></td>
            <td>{beer.brewers_tips}</td>
            <td>{beer.contributed_by}</td>
        </tr>
    )
};

export default BeerTableRow;
