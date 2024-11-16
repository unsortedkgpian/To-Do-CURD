
import './TopBar.css';
import searchLens from './lens.svg';
import filterLens from './filter.svg';
import downarrow from './down.svg';

const TopBar = () => {

    return (
        <div className="top-bar w-[80vw] flex justify-between items-center">
            <div className='SearchBar'>
                <div className="search-bar-area">
                    <img src={searchLens} alt="lens" />
                    <input type="search" placeholder="Search Project" />
                </div>
            </div>
            <div className='dropdown'>
                <button className="dropdown-toggle" >
                    <img src={filterLens} alt="lens" />
                    Filter
                </button>

                <div className="dropdown-arrow">
                    <img src={downarrow} alt="lens" />
                </div>
            </div>
        </div>
    )
}

export default TopBar
