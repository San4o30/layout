import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Controller } from "react-hook-form";
import FormLabel from '@mui/material/FormLabel';

function CheckBox({control}) {
  return (
    <>
      <Controller
        name="Checkbox"
        control={control}
        rules={{ required: 'Поле обязательно к заполнению!' }}
            required
        render={({ field,fieldState: { error } }) => <>
          <h4 className='fields-title'>Checkbox fields</h4>
          <FormLabel id="demo-checkbox-label">Навыки</FormLabel>
          <FormGroup required aria-label="position" className='jc'
          row>
          <FormControlLabel
            value="end"
            control={<Checkbox {...field} color="secondary" />}
            label="HTML"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox {...field} color="secondary" />}
            label="CSS"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox {...field} color="secondary" />}
            label="JavaScript"
            labelPlacement="end"
          />
        </FormGroup>
        <div className="">{error && <p className='error'>{error.message}</p>}</div></>}
      />

    </>
  )
}

export default CheckBox