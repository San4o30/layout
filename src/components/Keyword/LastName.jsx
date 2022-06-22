import { TextField } from '@mui/material'
import React from 'react'

import { Controller } from 'react-hook-form';

function Text({ control }) {
  return (
    <>
      <h4 className='fields-title'>Input Field</h4>
      <Controller
        name="LastName"
        control={control}
        rules={{
          required: 'Поле обязательно к заполнению!',
          minLength: {
            value: 3,
            message: 'Больше трёх символов!'
          },
          pattern: /^[А-яа-яA-Za-z]+$/i
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <TextField
            required

              label="Your LastName"
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

export default Text




