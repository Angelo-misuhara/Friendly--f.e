import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
 FormHelperText,
  Input
} from '@chakra-ui/react'

const Post = () => {
  const [input, setInput] = useState('')
  // const {
  //    register,
  //    handleSubmit,
  //    watch,
  //    formState: { errors },
  //  } = useForm()
 const handleInputChange = (e) => setInput(e.target.value)
   // const onSubmit = (data) => console.log(data)

   // console.log(watch("example")) // watch input value by passing the name of it
  return (
   <>
    <div className='flex justify-center items-center'>
       <FormControl>
      <Input type='email' value={input} onChange={handleInputChange} />
    </FormControl>
   </div>
   </>
  )
}

export default Post


  // <form onSubmit={handleSubmit(onSubmit)}>
  //    <button type='submit'>submit</button>
  //     {/* register your input into the hook by invoking the "register" function */}
  //     <input defaultValue="" {...register("example", { required: true })} />
  //     {/* errors will return when field validation fails  */}
  //     {errors.exampleRequired && <span>This field is required</span>}
  //   </form>