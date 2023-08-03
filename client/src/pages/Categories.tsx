import { FC, useState } from 'react'
import { AiFillEdit, AiFillCloseCircle } from 'react-icons/ai'
import { FaPlus } from 'react-icons/fa'
import { Form, useLoaderData } from 'react-router-dom'
import CategoryModal from '../components/CategoryModal'
import { instance } from '../api/axios.api'
import { ICategory } from '../types/types'

export const categoriesAction = async ({request}: any) => {
	switch(request.method){
			case "POST": {
				const formData = await request.formData()
				const title = {
					title: formData.get('title')
				}
				await instance.post('/categories', title)
				return null
			}
			case "PATCH": {
				const formData = await request.formData()
				const category = {
					id: formData.get('id'),
					title: formData.get('title')
				}
				await instance.patch(`categories/category/${category.id}`, category)
				return null
			}
			case "DELETE": {
				const formData = await request.formData()
				const categoryId =  formData.get('id')
				await instance.delete(`categories/category/${categoryId}`)
				return null
			}

	}
}

export const categoryLoader = async () => {
	const { data } = await instance.get<ICategory[]>('categories')
	return data
}


const Categories: FC = () => {
	const categories = useLoaderData() as ICategory[]
	const [categoryId, setCategoryId] = useState<number>(0)
	const [categoryTitle, setCategoryTitle] = useState<string>()
	const [isEdit, setIsEdit] = useState<boolean>(false)

	const [visibleModal, setVisibleModal] = useState<boolean>(false)
	return (
		<>
		<div className='mt-10 p-4 rounded-md bg-slate-800'>
			<h1>Your category list:</h1>
			{/* category list */}
			<div className='mt-2 flex flex-wrap items-center gap-2'>
				{categories.map((category, idx) => (
					<div key={idx} className="group py-2 px-4 rounded-lg bg-blue-600 flex items-center relative gap-2">
					{category.title}
					<div className='hidden absolute px-3 left-0 top-0 bottom-0 right-0 flex rounded-lg bg-black/90 items-center justify-between group-hover:flex'>
						<button
						onClick={() => {
							setCategoryId(category.id)
							setCategoryTitle(category.title)
							setVisibleModal(true)
							setIsEdit(true)
						}}
						className='hover_btn_blue'>
							<AiFillEdit  />
						</button>

						<Form className='flex' method='delete' action='/categories'>
							<input type="hidden" name="id" value={category.id} />
							<button type="submit" className='hover_btn_blue'>
								<AiFillCloseCircle />
							</button>
						</Form>
					</div>
				</div>
				))}
			</div>

			{/* add category */} 
			<button onClick={() => setVisibleModal(true)} className='max-w-fit mt-5 flex items-center gap-2 text-white/50 hover:text-white'>
				<FaPlus />
				<span>Creacte a new category</span>
			</button>
		</div>
		{/* add category modal */}
		{
			visibleModal && (
				<CategoryModal type='post' setVisibleModal={setVisibleModal} />
			)
		}
		{/* edit category modal */}
		{
			visibleModal && isEdit && (
				<CategoryModal type='patch' id={categoryId} title={categoryTitle} setVisibleModal={setVisibleModal} />
			)
		}
		</>
	)
}

export default Categories
