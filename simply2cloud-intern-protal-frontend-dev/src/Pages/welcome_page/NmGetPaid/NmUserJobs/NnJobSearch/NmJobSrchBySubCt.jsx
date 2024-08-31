import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { DataContext } from '../../../../../context';

const filter = createFilterOptions();

export default function InternJobSearchBySubCategoery(props) {

  const [value, setValue] = React.useState(null);
  const { jobSearchFilterFunc,tempFilterJobs } = React.useContext(DataContext);
  
  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        props.setSelectedSubCategoery(newValue);
      if (!newValue){
        if (!props.selectedLocation && !props.selectedTitle){
          props.setIsFilter(false);
        }
        jobSearchFilterFunc(props?.selectedCategoery?.id,props.selectedTitle, props.selectedLocation,null ,props.setFilteredJobs);  
      }
      else{
        props.setIsFilter(true);
        
        if (!props?.selectedCategoery && !props.selectedLocation){   
          jobSearchFilterFunc(props?.selectedCategoery?.id, props.selectedTitle, props.selectedLocation, newValue.id,props.setFilteredJobs);  
          }
          else {
            // const fl = props.studentJobsObj?.filter((element) => element.location == newValue.location_slug)
            const fs = tempFilterJobs?.filter((element) => element.sub_categoery === newValue.id);
            props.setFilteredJobs(fs)
          }

      }
      if (typeof newValue === 'string') {
          setValue({
            sub_category_name: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            sub_category_name: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {

        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.sub_category_name);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            sub_category_name: `${inputValue}`,
          });
        }
        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={props.filterSubCategoeryOpt}
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
        return option.sub_category_name;
      }}
      renderOption={(props, option) => <li {...props}>{option.sub_category_name}</li>}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Search Sub Categoery" />
      )}
    />
  );
}
