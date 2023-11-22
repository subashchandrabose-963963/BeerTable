import { useSelector } from 'react-redux';
const Loader = () => {
    const loaderStatus = useSelector((state) => state.loaderStatus);

    return (
        <>
            {loaderStatus != 'false' &&
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={require('../assets/loaderTitle.gif')} width="170px" height="100px"></img>
                </div>
            }

        </>
    )
}

export default Loader;