import { useReducer } from 'react';
import { BiPlus } from 'react-icons/bi';
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
    console.log(formData);
  };
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
