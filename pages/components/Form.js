import { useReducer } from 'react';
import { BiPlus } from 'react-icons/bi';
import Success from './success';
const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};
export default function Form() {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0)
      return console.log("Don't have Form Data");
    console.log(formData);
  };

  if (Object.keys(formData).length > 0) return <Bug message={'Error'}></Bug>;

  return (
    <form className='grid lg:grid-cols-2 w-4/6 gap-4' onSubmit={handleSubmit}>
      <div className='input-type'>
        <input
          type='text'
          name='itemtext'
          className='border w-full px-5 py-3 focus:outline-none rounded-md'
          placeholder='Enter Item'
          onChange={setFormData}
        />
      </div>

      <button className='flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500'>
        <span className='px-1'>
          <BiPlus size={24}></BiPlus>
        </span>
        Add
      </button>
    </form>
  );
}
