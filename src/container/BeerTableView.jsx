import BeerTable from "../components/BeerTable";
import { useSelector } from 'react-redux';

const BeerTableView = () => {
    const beers = useSelector((state) => state.beers);

    return (
        <>
            <h4 className="text-center mt-2">Welcome To Beer Table</h4>
            <BeerTable beers={beers} />
        </>
    )
}

export default BeerTableView;