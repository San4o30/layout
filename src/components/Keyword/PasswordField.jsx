import React from 'react'
import {  TextField } from '@mui/material'
import { Controller } from 'react-hook-form';

function PasswordField({ control }) {

  return (
    <>
      <h4 className='fields-title'>Password Field</h4>
      <Controller
        name="Password"
        control={control}
        rules={{
          required: 'Поле обязательно к заполнению!',
          pattern: /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*([^\w\s]|[_]))\S{8,30}$/
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <TextField
              required
              color='secondary'
              variant="standard"
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              margin="dense"
              placeholder='password'
              {...field}
            />
            <div className="">{error && <p className='error'>{error?.message || 'Некорректные данные'}</p>}</div>
          </>
        )}
      />

    </>
  )
}

export default PasswordField

