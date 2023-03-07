import Head from 'next/head';
import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import Form from '../components/form';
import Table from '../components/table';
import { useSelector, useDispatch } from 'react-redux';
import { toggleChangeAction } from '../redux/reducer';

export default function Home() {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();

  const handler = () => {
    dispatch(toggleChangeAction());
  };
  return (
    <section>
      <Head>
        <title>Shopping List Application/</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='py-5'>
        <h1 className='text-xl md:text-5xl text-center font-bold py-10'>
          Shopping List
        </h1>

        <div className='container mx-auto flex justify-between py-5 border-b'>
          <div className='left flex gap-3'>
            <button
              onClick={handler}
              className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:border-indigo-500 hover:text-gray-800'
            >
              Add ShoppingList Item{' '}
              <span className='px-1'>
                <BiPlus size={23}></BiPlus>
              </span>
            </button>
          </div>
        </div>

        {/* collapsable form */}
        {visible ? <Form></Form> : <></>}

        {/* table */}
        <div className='container mx-auto'>
          <Table></Table>
        </div>
      </main>
    </section>
  );
}
