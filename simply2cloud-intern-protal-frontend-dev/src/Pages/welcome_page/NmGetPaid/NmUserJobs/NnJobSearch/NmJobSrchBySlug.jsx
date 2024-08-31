import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { DataContext } from '../../../../../context';


const filter = createFilterOptions();

export default function InternJobSearchBySlug(props) {

  const [value, setValue] = React.useState(null);
  const { jobSearchFilterFunc } = React.useContext(DataContext);


  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        props.setSelectedTitle(newValue?.job_title_slug);
        console.log(newValue);
      if (!newValue){
        if (!props.selectedLocation && !props.selectedCategoery.id){
          props.setIsFilter(false);
        }
        jobSearchFilterFunc(props?.selectedCategoery?.id ,null, props.selectedLocation,props.selectedSubCategoery ,props.setFilteredJobs,);  
      }
      else{
        props.setIsFilter(true);
          jobSearchFilterFunc(props?.selectedCategoery?.id, newValue.job_title_slug, props.selectedLocation,props.selectedSubCategoery ,props.setFilteredJobs);
      }
      if (typeof newValue === 'string') {
          setValue({
            job_title_slug: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            job_title_slug: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.job_title_slug);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            job_title_slug: `${inputValue}`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={props.searchTitleSlugsObj}
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
        return option.job_title_slug;
      }}
      renderOption={(props, option) => <li {...props}>{option.job_title_slug}</li>}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Search Jobs" />
      )}
    />
  );
}
