import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { DataContext } from '../../../../context';

const filter = createFilterOptions();

export default function InternJobSearchByCategoery(props) {

  const [value, setValue] = React.useState(null);
  const { jobSearchFilterFunc } = React.useContext(DataContext);
  
  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        props.setSelectedCategoery(newValue);

       
      if (!newValue){
        props.setFilterSubCategoeryOpt([]);
        if (!props.selectedLocation && !props.selectedTitle){
          props.setIsFilter(false);
        }
        jobSearchFilterFunc(null,props.selectedTitle, props.selectedLocation,props.selectedSubCategoery ,props.setFilteredJobs);  
      }
      else{
        let fl = props.jobSubCategoeryOpt.filter((element, index)=>{
          return element.category == newValue.id
        });
        props.setFilterSubCategoeryOpt(fl);

        props.setIsFilter(true);
          jobSearchFilterFunc(newValue.id, props.selectedTitle, props.selectedLocation, props.selectedSubCategoery,props.setFilteredJobs);  
      }
      if (typeof newValue === 'string') {
          setValue({
            job_category: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            job_category: newValue.inputValue,
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
      options={props.jobCategoeryOpt}
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
      renderOption={(props, option) => <li {...props}>{option.job_category}</li>}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Search Profile" />
      )}
    />
  );
}
