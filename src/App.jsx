import './App.css'
import { Box } from '@mui/material'
import CheckBox from './components/CheckBox/CheckBox';
import TextArea from './components/TextArea/TextArea';
import RadioFields from "./components/RadioFields/RadioFields";
import SubmitButton from "./components/SubmitButton/SubmitButton";
import SelectField from './components/SelectField/SelectField';
import { useForm } from 'react-hook-form';
import DateField from './components/DateField/DateField';
import { useState } from 'react';
import React from 'react'
import Modalk from './components/Modalk/Modalk';
import PasswordField from './components/Keyword/PasswordField';
import SecondEmailField from './components/Keyword/SecondEmailField';
import Text from './components/TextField/Text';
import LastName from './components/Keyword/LastName'
import EmailField from './components/EmailField/EmailField';
import Input from './components/TextField/Input';
import GenderRadio from './components/Keyword/GenderRadio';
import Age from './components/Keyword/Age';
function App() {
  const {
    handleSubmit,
    reset,
    control,
  } = useForm({
    defaultValues: {
      Checkbox: false,
      Name: '',
      LastName: '',
      Text: '',
      Select: {},
      Textarea: '',
      Email: '',
      SecondEmail: '',
      Password: '',
      RadioGroup: '',
      RadioGroup2: '',
      Date: ''
    },
    mode: 'onBlur'
  })
  const [value, setValue] = useState('');
  const [input, setInput] = useState('')
  const [id, setId] = useState(9)
  const [keyword, setKeyword] = useState([{
    id: 1,
    name: null,
    order: 1,
    field: <Text control={control} />
  },
  {
    name: null,
    id: 2,
    order: 2,
    field: <EmailField control={control} />
  },
  {
    id: 3,
    name: null,
    order: 3,
    field: <PasswordField control={control} />
  },
  {
    id: 4,
    name: null,
    order: 4,
    field: <DateField value={value} setValue={setValue} control={control} />
  },
  {
    id: 5,
    name: null,
    order: 5,
    field: <SelectField control={control} />
  },
  {
    id: 6,
    order: 6,
    name: null,
    field: <CheckBox control={control} />
  },
  {
    id: 7,
    order: 7,
    name: null,
    field: <TextArea control={control} />
  },
  {
    id: 8,
    order: 8,
    name: null,
    field: <RadioFields control={control} />
  }])
  const [currentInput, setCurrentInput] = useState(null)


  const dragStartHandler = (e, card) => {
    setCurrentInput(card)
  }
  const dragEndHandler = (e) => {
    e.target.style.background = 'white'

  }
  const dragOverHandler = (e) => {
    e.preventDefault()
    e.target.style.background = 'gainsboro'
  }

  const dropHandler = (e, input) => {
    e.preventDefault()
    setKeyword(keyword.map(f => {
      if (f.id === input.id) {
        return { ...f, order: currentInput.order }
      }
      if (f.id === currentInput.id) {
        return { ...f, order: input.order }
      }
      return f
    }
    ))
    e.target.style.background = 'white'

  }
  const sortFields = (a, b) => {
    if (a.order > b.order) {
      return 1
    } else {
      return -1
    }
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  const onSubmit = () => {
    setValue(null)
    reset()
    setShow(true)
  }
  const getField = () => {
    if (input === 'textarea' || input === 'Textarea') {
      setId(id + 1)
      keyword.push({ field: <TextArea control={control} />, id: id, order: id })

    } else if (input === 'lastname' && keyword.map(k => k.name !== 'lastname')) {
      setId(id + 1)
      keyword.push({ field: <LastName control={control} />, id: id, order: id, name: 'lastname' })
    } else if (input === 'text' || input === 'Text' || input === 'input') {
      setId(id + 1)
      keyword.push({ field: <Input control={control} />, id: id, order: id })
    } else if (input === 'password' || input === 'Password') {
      setId(id + 1)
      keyword.push({ field: <PasswordField control={control} />, id: id, order: id })
    } else if (input === 'email' || input === 'Email' || input === 'second email' || input === 'secondemail') {
      setId(id + 1)
      keyword.push({ field: <SecondEmailField control={control} />, id: id, order: id })
    } else if (input === 'select' || input === 'Select') {
      setId(id + 1)
      keyword.push({ field: <SelectField control={control} />, id: id, order: id })
    } else if (input === 'checkbox' || input === 'Checkbox') {
      setId(id + 1)
      keyword.push({ field: <CheckBox control={control} />, id: id, order: id })
    } else if (input === 'radio' || input === 'Radio' || input === 'gender') {
      setId(id + 1)
      keyword.push({ field: <GenderRadio control={control} />, id: id, order: id })
    } else if (input === 'date' || input === 'Date') {
      setId(id + 1)
      keyword.push({ field: <DateField value={value} setValue={setValue} control={control} />, id: id, order: id })
    } else if (input === 'age' || input === 'Age') {
      setId(id + 1)
      keyword.push({ field: <Age control={control} />, id: id, order: id })
    }
    setInput('')

  }

  const delField = (i) => {
    const copy = keyword
    copy.splice(i, 1);
    setKeyword(copy)
    setInput(i)
  }

  return (
    <div className="App">
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100%' },
        }}
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off">


        {keyword.sort(sortFields).map((input, i) =>
          <div
            className="field"
            key={input.id}
            draggable={true}
            onDragStart={(e) => dragStartHandler(e, input)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDragLeave={(e) => dragEndHandler(e)}
            onDrop={(e) => dropHandler(e, input)}
          >
            {input.field}
            {input.id !== 1 & input.id !== 2 & input.id !== 3 & input.id !== 4 & input.id !== 5 & input.id !== 6 & input.id !== 7 & input.id !== 8 ?
              <p onClick={() => { delField(i) }} className='close'>×</p>
              : null
            }
          </div>
        )}






        <Modalk show={show} handleClose={handleClose} handleShow={handleShow} />
        <SubmitButton />

      </Box >
      <div className='add-field'>
        <input onFocus={() => setInput('')} className='inp' placeholder='Add any type of field' type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => getField()} className='add-btn' type='submit'>Add field </button>
      </div>
    </div >
  );
}

export default App;
