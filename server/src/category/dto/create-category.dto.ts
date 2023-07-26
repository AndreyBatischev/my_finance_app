import { IsNotEmpty, IsOptional } from 'class-validator'
import { Transaction } from 'src/transaction/entities/transaction.entity'
import { User } from 'src/user/entities/user.entity'

export class CreateCategoryDto {
	@IsNotEmpty()
	title: string

	@IsOptional()
	user?: User
}
