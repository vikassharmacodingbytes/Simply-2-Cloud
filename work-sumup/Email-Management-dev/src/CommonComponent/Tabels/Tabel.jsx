import React, { useContext, useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import TabelSupport from './TabelSupport';
import Loading from '../../component/LoadingSpinner/LoadingSpinner';
import { useLocation } from 'react-router-dom';
import TabelPhoneSupport from './TabelPhoneSupport';

const CustomTabel = ({ topTableHeading, getFunc, tabelObj, query, EditModal, url_route, title }) => {

  const [search, setSearch] = useState('all');
  const [filterTabelObj, setFilterTabelObj] = useState(tabelObj);
  const location = useLocation();

  useEffect(() => {
    setFilterTabelObj(tabelObj);
  }, [tabelObj]);

  if (!tabelObj || !topTableHeading) {
    return <Loading />
  }

  return (
    <div className='my-5 mx-4'>
      <>
        <ToastContainer />
        <div>
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">{title}<span className="font-semibold text-2xl">{query?.country_name} </span>
          </h1>
          {tabelObj[0] && 'active' in tabelObj[0] ? <select
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              if (e.target.value == "all") {
                setFilterTabelObj(tabelObj);
              }
              else {
                const filterObjs = tabelObj?.filter((element) => element.active === (e.target.value === 'true'));
                setFilterTabelObj(filterObjs);
              }
            }}
          >
            <option value={'all'}>Show All</option>
            <option value={true}>Active</option>
            <option value={false}>Non Active</option>
          </select> : null}
        </div>
        <table className="min-w-full  bg-white shadow-md rounded-lg overflow-hidden text-gray-700 hidden md:table">
          <thead className="bg-gray-200">
            <tr>
              {topTableHeading?.map((element, index) => {
                return element.display == false ? null : <th className="text-center py-2 px-4 border-b ">{element.label}</th>
              })}
            </tr>
          </thead>
          <tbody>
            {filterTabelObj?.map((element, index) => {
              return <TabelSupport row_data={element} topTableHeading={topTableHeading} EditModal={EditModal} url_route={url_route} getFunc={getFunc} query={query} />
            })}
          </tbody>
        </table>

        <div>
          {filterTabelObj?.map((element, index) => {
            return <TabelPhoneSupport row_data={element} topTableHeading={topTableHeading} EditModal={EditModal} url_route={url_route} getFunc={getFunc} query={query} />
          })}
        </div>
      </>

    </div>
  )
}

export default CustomTabel
