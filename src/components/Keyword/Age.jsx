import * as React from 'react';
import Slider from '@mui/material/Slider';
import { Controller } from 'react-hook-form';
import FormLabel from '@mui/material/FormLabel';

function Age({ control }) {
  return (
    <>
      <Controller
        name="Password"
        control={control}
        rules={{
          required: 'Поле обязательно к заполнению!',
          min:18
        }}
        render={({ field, fieldState: { error } }) => (
          <>
          <FormLabel id="demo-slider-label">Age</FormLabel>
            <Slider
              {...field}
              min={10}
              max={110}
              defaultValue={1}
              aria-label="Default"
              valueLabelDisplay="auto" />
            <div className="">{error && <p className='error'>{error?.message || 'Некорректные данные'}</p>}</div>
          </>
        )}
      />

    </>
  )
}

export default Age