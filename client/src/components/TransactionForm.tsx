import  { FC } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Form } from 'react-router-dom'

const TransactionForm: FC = () => {
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
        <label htmlFor="category" className='grid'>
            <span className='mb-1'>Category</span>
            <select name="category" required className='input' >
                <option value="1">Salary</option>
                <option value="2">Gift</option>
            </select>
        </label>
        
        {/* add category */}
        <button 
        // onClick={() => setVisibleModal(true)}
         className='max-w-fit mt-2 flex items-center gap-2 text-white/50 hover:text-white'>
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
  </div>
}

export default TransactionForm