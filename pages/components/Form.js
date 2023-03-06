export default function Form() {
  return (
    <form className='grid lg:grid-cols-2 w-4/6 gap-4'>
      <div className='input-type'>
        <input
          type='text'
          name='itemname'
          className='border w-full px-5 py-3 focus:outline-none rounded-md'
          placeholder='Enter Item'
        />
      </div>

      <button className='flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500'>
        Add
      </button>
    </form>
  );
}
