import React from 'react'
import Radio from '@mui/material/Radio'
import { FormControlLabel, RadioGroup } from '@mui/material'
import { Controller } from "react-hook-form";
import FormLabel from '@mui/material/FormLabel';

function RadioFields({ control }) {

  return (
    <>
      <h4 className='fields-title'>Radio fields</h4>

      <Controller
        rules={{
          required: 'Поле обязательно к заполнению!',
        }}
        name="RadioGroup"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <FormLabel id="demo-radio-buttons-group-label">Опыт работы</FormLabel>


            <RadioGroup
              {...field}
              row
              aria-labelledby="demo-form-control-label-placement"
              name="position"
              sx={{ width: '100%' }}
              className='jc'
              required

            >
              <FormControlLabel value='label1' control={<Radio color="secondary" />} label='Нет' />
              <FormControlLabel value='label2' control={<Radio color="secondary" />} label='Меньше года' />
              <FormControlLabel value='label3' control={<Radio color="secondary" />} label='Больше года' />
            </RadioGroup>
            <div className="">{error && <p className='error'>{error.message}</p>}</div>
          </>
        )}

      />
    </>

  )
}

export default RadioFields