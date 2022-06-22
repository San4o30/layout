import React from 'react'
import { InputAdornment, TextField } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import { Controller } from 'react-hook-form';

function EmailField({control}) {
  return (
    <>
    <h4 className='fields-title'>Second Email field</h4>
    <Controller
        name="SecondEmail"
        control={control}
        rules={{
          required: 'Поле обязательно к заполнению!',
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <TextField
            required
              label="Second Email"
              color="secondary"
              type='email'
              {...field}
              className='input' 
              id="input-with-icon-textfield" 
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <MailIcon />
                  </InputAdornment>
                ),
              }} />
            <div className="">{error && <p className='error'>{error?.message || 'Некорректные данные'}</p>}</div>
          </>
        )}
      />
  </>
  )
}

export default EmailField

