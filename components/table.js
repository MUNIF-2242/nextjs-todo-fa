import { BiEdit, BiTrashAlt } from 'react-icons/bi';
import { getUsers } from '../lib/helper';
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleChangeAction,
  updateAction,
  deleteAction,
} from '../redux/reducer';

export default function Table() {
  const { isLoading, isError, data, error } = useQuery('users', getUsers);

  if (isLoading) return <div>Shopping list is Loading...</div>;
  if (isError) return <div>Got Error {error}</div>;

  return (
    <table className='min-w-full table-auto'>
      <thead>
        <tr className='bg-gray-800'>
          <th className='px-16 py-2'>
            <span className='text-gray-200'>Title</span>
          </th>
          <th className='px-16 py-2'>
            <span className='text-gray-200'>Status</span>
          </th>
          <th className='px-16 py-2'>
            <span className='text-gray-200'>Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className='bg-gray-200'>
        {data.map((obj, i) => (
          <Tr {...obj} key={i} />
        ))}
      </tbody>
    </table>
  );
}

function Tr({ _id, name, status }) {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();

  const onUpdate = () => {
    dispatch(toggleChangeAction(_id));
    if (visible) {
      dispatch(updateAction(_id));
    }
  };

  const onDelete = () => {
    if (!visible) {
      dispatch(deleteAction(_id));
    }
  };

  return (
    <tr className='bg-gray-50 text-center'>
      <td className='px-16 py-2 flex flex-row items-center'>
        <span className='text-center ml-2 font-semibold'>
          {name || 'Unknown'}
        </span>
      </td>
      <td className='px-16 py-2'>
        <button className='cursor'>
          <span
            className={`${
              status == 'Completed' ? 'bg-green-500' : 'bg-rose-500'
            } text-white px-5 py-1 rounded-full`}
          >
            {status || 'Unknown'}
          </span>
        </button>
      </td>
      <td className='px-16 py-2 flex justify-around gap-5'>
        <button className='cursor' onClick={onUpdate}>
          <BiEdit size={25} color={'rgb(34,197,94)'}></BiEdit>
        </button>
        <button className='cursor' onClick={onDelete}>
          <BiTrashAlt size={25} color={'rgb(244,63,94)'}></BiTrashAlt>
        </button>
      </td>
    </tr>
  );
}
