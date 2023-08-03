import { FC } from 'react'
import TransactionForm from '../components/TransactionForm'

const Transactions: FC = () => {
	return <>
		<div className='grid grid-cols-3 gap-4 mt-4 items-start'>
			{/* add transaction form */}
			<div className="col-span-2 grid">
				<TransactionForm />
			</div>

			{/* statistic blocks */}
			<div className="rounded-md bg-slate-800 p-3">
				<div className="grid grid-cols-2 gap-3">
					<div>
						<p className='uppercase text-center font-bold text-md'>Total Income:</p>
						<p className='mt-2 rounded-sm bg-green-600 p-1 text-center'>1000$</p>
					</div>

					<div>
						<p className='uppercase text-center font-bold text-md'>Total Expense:</p>
						<p className='mt-2 rounded-sm bg-red-500 p-1 text-center'>1000$</p>
					</div>
				</div>
				<div>Chart</div>
			</div>
		</div>

		{/* transactions table */}
		<h1 className='my-5'>Table</h1>
	</>
}

export default Transactions
