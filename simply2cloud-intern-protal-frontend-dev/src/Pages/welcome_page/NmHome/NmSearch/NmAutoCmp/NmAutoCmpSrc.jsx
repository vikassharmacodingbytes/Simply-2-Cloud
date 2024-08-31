import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { DataContext } from '../../../../../context';
import { useNavigate } from 'react-router-dom';
import "./NmAutoCmpStyle.css"


const filter = createFilterOptions();

export default function NmAutoCmpSrc(props) {

  const [value, setValue] = React.useState(null);
  const {jobCategoeryOpt, 
    avaibleSkills,jobSubCategoeryOpt
    } = React.useContext(DataContext);
  const navigate = useNavigate();
  console.log(jobCategoeryOpt);

  // React.useEffect(()=>{
  //   unAuthHomePageFunc();
  // },[])


  return (
    <Autocomplete
    className='bg-white outline-black myAutocomplete'
      value={value}
      onChange={(event, newValue) => {
        if(typeof newValue != "object" || !newValue.id ){
          return;
        }
        if(newValue.job_category){
          navigate(`search?search_categoery=${newValue.job_category}&search_id=${newValue.id}`);
        }
        else if(newValue.name){
          navigate(`search?search_skills=${newValue.name}&search_id=${newValue.id}`);
        }
        else if(newValue.sub_category_name){
          navigate(`search?search_sub_categoery=${newValue.sub_category_name}&search_id=${newValue.id}`);
        }
      if (typeof newValue === 'string') {
        return;
          setValue({
            job_category: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            job_category : newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);
        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.job_category);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            job_category: `${inputValue}`,
          });
        }
        return filtered;
      }}
      
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={jobCategoeryOpt ? [...jobCategoeryOpt, ...avaibleSkills, ...jobSubCategoeryOpt] : []}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.job_category;
      }}
      renderOption={(props, option) => <li {...props}>{
        option.job_category ? option.job_category : option.sub_category_name ? option.sub_category_name : option.name}</li>}
      sx={{ width: {
        xs : '100%',
        md: 400 
      } }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Search Profile" style={{outline: "black"}} InputLabelProps={{
            style: { color: 'black' }, // set placeholder color to grey-700
          }}
          InputProps={{
            ...params.InputProps,
            style: {
              borderBottom: 'none', // remove the border
            },
          }}
          />
      )}
    />
  );
}
