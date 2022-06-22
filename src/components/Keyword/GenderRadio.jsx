import React from 'react'
import Radio from '@mui/material/Radio'
import { FormControlLabel, RadioGroup } from '@mui/material'
import { Controller } from "react-hook-form";
import FormLabel from '@mui/material/FormLabel';
function GenderRadio({ control }) {

  return (
    <>
      <h4 className='fields-title'>Radio fields</h4>

      <Controller
        rules={{
          required: 'Поле обязательно к заполнению!',
        }}
        name="RadioGroup2"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
            {...field}
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            required

            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            <div className="">{error && <p className='error'>{error.message}</p>}</div>
          </>
        )}

      />
    </>

  )
}

export default GenderRadio