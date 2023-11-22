import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBeers, setCurrentPage } from '../redux/actions';
import BeerTableRow from '../components/BeerTableRow';
import Pagination from '../components/Pagination';
import Loader from "../components/Loader";


const BeerTable = ({ beers }) => {
  const [tableHeadings, setTableHeadings] = useState([]);
  const [brewedBefore, setBrewedBefore] = useState('');
  const [brewedAfter, setBrewedAfter] = useState('');
  const currentPage = useSelector((state) => state.currentPage);
  const loaderStatus = useSelector((state) => state.loaderStatus);
  const dispatch = useDispatch();
  const totalPages = 10;

  function GetTableHeadings(payload) {
    const [GetFirstData, ...rest] = payload;
    const tableHeadingData = GetFirstData && Object.keys(GetFirstData);
    setTableHeadings(tableHeadingData);
  }

  function handlePageChange(page) {
    dispatch(setCurrentPage(page));
  };

  function handleFilterChange(event) {
    const { name, value } = event.target;
    if (name === 'brewedBefore') setBrewedBefore(value)
    else if (name === 'brewedAfter') setBrewedAfter(value)
  }

  useEffect(() => {
    fetchBeers(currentPage, totalPages, brewedBefore, brewedAfter, dispatch).then(res => {
      dispatch(res);
      res.payload && res.payload.length > 0 && GetTableHeadings(res.payload);
    });
  }, [dispatch, currentPage, brewedBefore, brewedAfter]);

  return (
    <div className="container mt-4">
      <div className='row'>
        <div className="mb-4 col-xl-6 col-lg-6 col-sm-12">
          <label>Brewed Before:</label>
          <input type="date" className='form-control' name="brewedBefore" value={brewedBefore} onChange={handleFilterChange} />
        </div>
        <div className="mb-4 col-xl-6 col-lg-6 col-sm-12">
          <label>Brewed After:</label>
          <input type="date" className='form-control' name="brewedAfter" value={brewedAfter} onChange={handleFilterChange} />
        </div>
      </div>

      <div className='table-responsive table-responsive-sm'>
        <table className="table table-bordered table-hover">
          <thead className='table-dark'>
            <tr>
              {tableHeadings && tableHeadings.length > 0 && tableHeadings.map((table_items) => {
                return <th className={table_items == 'description' ? 'increase-width' : ''} key={table_items}>{table_items}</th>
              })
              }
            </tr>
          </thead>
          {
            loaderStatus == 'false' &&
            <tbody>
              {beers && beers.length > 0 && beers.map((beer) => (
                <BeerTableRow key={beer.id} beer={beer} />
              ))}
            </tbody>
          }
        </table>
        {loaderStatus != 'false' ? <Loader></Loader> : ''}
        {(beers.length == 0 && loaderStatus == 'false') && <div className='d-flex justify-content-center'><h4>Table data is empty</h4></div>}
      </div>

      {beers && beers.length > 0 &&
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      }
    </div>
  );
};

export default BeerTable;
