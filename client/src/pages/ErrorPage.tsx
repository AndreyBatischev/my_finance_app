import { FC } from 'react'
import { Link } from 'react-router-dom'

const ErrorPage: FC = () => {
	return (
		<div className="min-h-screen bg-slate-900 items-center font-roboto text-white flex justify-center flex-col gap-10">
			<h1 className="text-9xl">404</h1>
			<span className="text-4xl">Page not found</span>
			<Link
				to={'/'}
				className="bg-sky-500 rounded-md px-6 py-2 hover:bg-sky-600"
			>
				Back
			</Link>
		</div>
	)
}

export default ErrorPage
