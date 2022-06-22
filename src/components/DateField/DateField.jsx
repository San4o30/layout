import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import { Controller } from "react-hook-form";
import { TextField } from '@mui/material';

function DateField({ control,value ,setValue}) {


  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Controller
          name='Date'
          rules={{ required: 'Поле обязательно к заполнению!' }}
          control={control}
          render={({ field: { ref, ...rest }, fieldState: { error } }) => (
            <>
              <h4 className='fields-title'>Date Field</h4>
              <DatePicker
                required
                className='date'
                label="Date field"
                value={value}
                c={new Date()}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                {...rest}
                renderInput={(params) => <TextField required {...params} />}
              />
              <div className="">{error && <p className='error'>{error.message}</p>}</div>
            </>
          )}
        />
      </LocalizationProvider>
    </>
  )
}


export default DateField