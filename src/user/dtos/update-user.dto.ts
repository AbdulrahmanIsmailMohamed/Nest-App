import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from './create_user.dto';

//Inherit class create user but We used Partial type to Make params options
export class UpdateUserDto extends PartialType(CreateUserDto) { }