import { Controller, Get, Post } from "@nestjs/common";

@Controller("users")
export class UserController {
    @Get()
    getUser(): string[] {
        return [
            "abdulrahman",
            "ismail"
        ]
    }
    @Post("create")
    createUser(): string {
        return `Create Users`
    }
}