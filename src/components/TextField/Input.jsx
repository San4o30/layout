import { TextField } from '@mui/material'
import React from 'react'

import { Controller } from 'react-hook-form';

function Input({ control }) {
  return (
    <>
      <h4 className='fields-title'>Input Field</h4>
      <Controller
        name="Text"
        control={control}
        rules={{
          required: 'Поле обязательно к заполнению!',
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <TextField
              label="Text"
              color="secondary"
              {...field}
              className='input' id="standard-basic" variant="standard" />
            <div className="">{error && <p className='error'>{error?.message || 'Некорректные данные'}</p>}</div>
          </>
        )}
      />
    </>
  )
}

export default Input