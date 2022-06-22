import { MenuItem, Select } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form';
import FormLabel from '@mui/material/FormLabel';

function SelectField({ control }) {

  return (
    <>
      <h4 className='fields-title'>Select Field</h4>
      
      <Controller
        name="Select"
        control={control}
        rules={{
          required: 'Поле обязательно к заполнению!',
        }}
        render={({ field, fieldState: { error } }) => (
          <>
          <FormLabel id="demo-select-label">Level</FormLabel>
            <Select variant='standard' className='input' required {...field}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'Начинающий'}>Начинающий</MenuItem>
              <MenuItem value={'Средний'}>Средний</MenuItem>
              <MenuItem value={'Продвинутый'}>Продвинутый</MenuItem>
            </Select>
            <div className="">{error && <p className='error'>{error.message}</p>}</div>
          </>
        )}

      />

    </>
  )
}

export default SelectField


