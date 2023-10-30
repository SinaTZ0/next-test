"use client";
import { AddingTag } from "@/store/slice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";

function FormData() {
  const dispatch = useDispatch();

  const formSchema = z.object({
    Name: z.string().min(1, "requierd"),
    LastName: z.string().min(3, "must be at least three character Buddy!"),
  });

  type formSchemaT = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<formSchemaT>({
    resolver: zodResolver(formSchema),
  });

  function _onSubmit(data: formSchemaT) {
    dispatch(AddingTag({ Name: data.Name, LastName: data.LastName }));
    reset();
  }

  return (
    <div className='bg-gray-200 rounded-md shadow-lg p-1 md:w-3/5 md:m-auto md:mt-4'>
      <form onSubmit={handleSubmit(_onSubmit)} className='flex flex-col'>
        <input
          {...register("Name")}
          type='text'
          className='bg-white rounded-sm p-2 m-2'
          placeholder='Name'
        />
        {errors.Name && (
          <p className='text-sm text-red-500 ml-5'>{errors.Name.message}</p>
        )}
        <input
          {...register("LastName")}
          type='text'
          className='bg-white rounded-sm p-2 m-2'
          placeholder='LastName'
        />
        {errors.LastName && (
          <p className='text-sm text-red-500 ml-5'>{errors.LastName.message}</p>
        )}
        <button
          disabled={isSubmitting}
          className='bg-blue-500 p-2 m-2 rounded-sm text-white shadow-sm disabled:bg-gray-400 active:bg-blue-600 active:shadow-none'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormData;
