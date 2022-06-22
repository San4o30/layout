import React from 'react'
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

function TextArea({ control }) {
  return (
    <>
      <h4 className='fields-title'>Text Area</h4>
      <Controller
        name="Textarea"
        control={control}
        rules={{
          required: 'Поле обязательно к заполнению!',
          maxLength: {
            value: 200,
            message: 'Не больше 200 символов!'
          },
          pattern: /^[А-яа-яA-Za-z]+$/i
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <TextField
              id="filled-multiline-static"
              label="Text area"
              multiline
              rows="5"
              className='textarea'
              color='secondary'
              variant="standard"
              {...field}
            />
            <div className="">{error && <p className='error'>{error?.message || 'Некорректные данные'}</p>}</div>

          </>
        )}

      />

    </>
  )
}

export default TextArea