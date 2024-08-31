import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { DataContext } from '../../../../../context';


const filter = createFilterOptions();

export default function InternJobSearchByLocation(props) {

  const [value, setValue] = React.useState(null);
  const { jobSearchFilterFunc, tempFilterJobs } = React.useContext(DataContext);


  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        props.setSelectedLocation(newValue?.location_slug);
      if (!newValue){
        if (!props.selectedTitles && !props.selectedCategoery){
          props.setIsFilter(false);
        }
        else{
          jobSearchFilterFunc(props.selectedCategoery?.id, props?.selectedTitles, null,props.selectedSubCategoery, props.setFilteredJobs);  
        }
      }
      else{
        props.setIsFilter(true);
        if (!props?.selectedCategoery && !props.selectedSubCategoery){
          jobSearchFilterFunc(props?.selectedCategoery?.id, props.selectedTitle, newValue.location_slug,props.selectedSubCategoery, props.setFilteredJobs);
        }
        else {
          // const fl = props.studentJobsObj?.filter((element) => element.location == newValue.location_slug)
          const fs = tempFilterJobs?.filter((element) => element.location === newValue.location_slug);
          props.setFilteredJobs(fs)
        }
      }
        
      
      if (typeof newValue === 'string') {
          setValue({
            location_slug: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            location_slug: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }

      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.location_slug);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            location_slug: `"${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={props.searchLocationSlugObj}
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
        return option.location_slug;
      }}
      renderOption={(props, option) => <li {...props}>{option.location_slug}</li>}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Filter Location" />
      )}
    />
  );
}