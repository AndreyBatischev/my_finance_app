import  { FC, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Form, useLoaderData } from 'react-router-dom'
import { IResponseTransactionLoader } from '../types/types'
import CategoryModal from './CategoryModal'

const TransactionForm: FC = () => {
    const {categories} = useLoaderData() as IResponseTransactionLoader
    const [visibleModal, setVisibleModal] = useState(false)
    
  return <div className='rounded-md bg-slate-800 p-4'>
    <Form className='grid gap-2' method='post' action='/transactions'>

        <label className='grid' htmlFor="title">
            <span className='mb-1'>Title</span>
            <input type="text" className='input' placeholder='Title...' name='title' required />
        </label>

        <label className='grid' htmlFor="amount">
            <span className='mb-1'>Amount</span>
            <input type="number" className='input' placeholder='Amount...' name='amount' required />
        </label>
        
        {/* select */}
        {categories.length ? (
            <label htmlFor="category" className='grid'>
                <span className='mb-1'>Category</span>
                <select name="category" required className='input' >
                    {categories.map((ctg, idx) => (
                        <option key={idx} value={ctg.id}>{ctg.title}</option>
                    ))}
                </select>
            </label>
        ) : (
            <h1 className='mt-1 text-red-300'>To continue a category create first</h1>
        )}
        
        {/* add category */}
        <button 
        onClick={() => setVisibleModal(true)}
         className='max-w-fit  flex items-center gap-2 text-white/50 hover:text-white'>
            <FaPlus />
            <span>Manage categories</span>
        </button>

        {/* radio btns */}

        <div className='flex gap-4 items-center'>
            <label className='flex cursor-pointer items-center gap-2'  >
                <input type="radio" name="type" value={'income'} id="" className='form-radio text-blue-600'  />
                <span>Income</span>
            </label>
        
            <label className='flex cursor-pointer items-center gap-2'  >
                <input type="radio" name="type" value={'expense'} id="" className='form-radio text-blue-600'  />
                <span>Expense</span>
            </label>
        </div>
        
        {/* submit btn */}
        <button type="submit" className='btn btn-green mt-2 max-w-fit'>Submit</button>
    </Form>

    {/* add category modal */}
    {
        visibleModal && (
            <CategoryModal type='post' setVisibleModal={setVisibleModal} />
        )
    }

  </div>
}

export default TransactionForm