import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../../../../context';
import LocationIc from '../../../../../image/location';
import { GitHub } from '@mui/icons-material';

const InternGithubProfile = ({username}) => {
    const { getGithubDetailsFunc,
        githubUserDetail } = useContext(DataContext);
    useEffect(() => {
        if(username){
            getGithubDetailsFunc(username);
        }
    }, [])

    if (!githubUserDetail) {
        return null
    }

    return (
        <div className='mt-10 text-sm md:text-base'>
            {/* {console.log(githubUserDetail)} */}
            <h1 className='font-semibold md:text-2xl text-xl text-gray-700 mb-4'>
              <GitHub />  Github Profile
            </h1>
            <div>
                {
                    <div className=' shadow-xl px-4 py-3 rounded-xl border-2 border-solid border-gray-300 my-4'>
                        <h1 className='font-bold md:text-lg text-base text-gray-800 flex'>
                            {githubUserDetail?.name}
                             <span className='font-semibold'>&nbsp;
                            ({githubUserDetail.company})</span>
                           {githubUserDetail.location?  <span className='mx-auto'><LocationIc />{githubUserDetail.location}</span> : null}
                        </h1>
                        <div>
                            <p>
                                [  <span className='font-semibold text-gray-700'>Github Repo: </span>{githubUserDetail?.public_repos}]
                                <br />
                                [  <span className='font-semibold text-gray-900'>Followers: </span><span className='font-semibold text-gray-600'> {githubUserDetail.followers} </span>]
                                [  <span className='font-semibold text-gray-900'>Following: </span><span className='font-semibold text-gray-600'> {githubUserDetail.following} </span>]
                            </p>
                        </div>
                        <div>
                            <h1 className='font-semibold text-gray-700'> {githubUserDetail.bio}</h1>
                        </div>
                        <div>
                        <div className=" pb-1 pt-1 text-center">
        <button
          className={`mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 font-semibold mt-5 uppercase leading-normal bg-black text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]`}
          type="button"
          onClick={() => {
            window.open(githubUserDetail.html_url);
          }}
          data-te-ripple-init
          data-te-ripple-color="light"
          style={{
          }}
        >
            Show Github Profile
        </button>
                        </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default InternGithubProfile
