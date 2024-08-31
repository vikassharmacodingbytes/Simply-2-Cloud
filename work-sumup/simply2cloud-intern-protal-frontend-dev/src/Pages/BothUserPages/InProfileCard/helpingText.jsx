 // <Card sx={{ maxWidth: 345 }} className='border-2 rounded-2xl'>
    //   <CardHeader
    //     avatar={
    //       profile?.user_image != null ? <img src={`${API_BASE_URL}/${profile.user_image}/`} className='w-[3rem] h-[3rem] rounded-full' /> :
    //         <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
    //           {/* {jobs.company.company_name.substring(0, 1)} */}
    //         </Avatar>

    //     }
    //     action={
    //       <IconButton aria-label="settings">
    //         {
    //           profile.intern.id == Cookies.get("user") ? <NavLink to={`/update-profile/${profile?.id}/`}> <ModeEditIcon /> </NavLink> : null
    //         }
    //         {console.log(profile.intern)}
    //       </IconButton>
    //     }

    //     title={<Typography variant="div" fontWeight="bold" className='text-lg'>
    //       {profile?.intern?.name}
    //     </Typography>}
    //     subheader={`${`${profile.job_categoery.job_category} (${profile.sub_categoery?.sub_category_name})`}`}
    //   />
    //   <CardContent>
    //     <table>
    //       {Object.entries(fieldsArray).map(([key, value]) => {
    //         return (


    //           <tr key={key} variant='tr'>
    //             <td key={key} variant='th' fontSize={"1rem"} className='font-bold' >
    //               {key}&nbsp;&nbsp;

    //             </td>
    //             <td variant='td' fontSize={"1rem"} fontWeight="400">
    //               {value}
    //             </td><br />
    //           </tr>
    //         )
    //       }
    //       )}


    //     </table>
    //     <div>
    //       <h1 className='font-bold underline text-center mt-4'>Details</h1>
    //       {profile.desc.split('\n').map((element, index) => {
    //         return <div key={index}>{index + 1}. {element}</div>
    //       })}
    //     </div>
    //     <div className="text-center mx-auto w-[100%] mt-4">
    //       <NavLink to={`/intern-details/${profile.id}`}>
    //         <button className="border mx-auto font-semibold border-blue-500 text-blue-500 px-2 py-1 flex items-center space-x-2 rounded-md hover:bg-blue-500 hover:text-white focus:outline-none focus:ring focus:border-blue-300">
    //           <span>View</span>
    //           <RemoveRedEyeIcon className="" />
    //         </button>
    //       </NavLink>

    //     </div>
    //   </CardContent>
    // </Card>