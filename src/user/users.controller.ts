import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Request,
    Response,
    HttpCode
} from "@nestjs/common";

import { CreateUserDto } from './dtos/create_user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid'

@Controller("users")
export class UserController {
    private users: UserEntity[] = [];

    @Get()
    @HttpCode(200)
    getUsers(): UserEntity[] {
        const users: UserEntity[] = this.users;
        return users;
    }

    @Post("create")
    @HttpCode(201)
    create(@Body() createUser: CreateUserDto) {
        const newUser: UserEntity = {
            ...createUser,
            id: uuid()
        };
        this.users.push(newUser);
        return newUser;
    }

    @Get(":id")
    @HttpCode(200)
    findOne(@Param("id") id: string): UserEntity {
        const user: UserEntity = this.users.find((user: UserEntity) => user.id == id);
        return user;
    }

    @Patch(":id")
    @HttpCode(200)
    update(@Param("id") id: string, @Body() updateUser: UpdateUserDto) {
        const userIndex = this.users.findIndex((user) => user.id == id);

        const update = { ...this.users[userIndex], ...updateUser }
        console.log(update);

        this.users[userIndex] = update;
        return this.users;
    }

    @Delete(":id")
    @HttpCode(200)
    delete(@Param("id") id: string) {
        this.users = this.users.filter((user) => user.id != id);
        return `Done!`;
    }
}