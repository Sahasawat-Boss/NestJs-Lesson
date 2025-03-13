import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users') // Defines the base route: /users (This makes all routes start with /users)
export class UsersController {

    constructor(private readonly usersService: UsersService) { }
    // Injecting UsersService to handle business logic

    @Get() // GET /users or GET /users?role=value
    // EX>>  /users?role=ADMIN
    findAll(@Query('role') role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
        return this.usersService.findAll(role)
    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id)
    }

    @Post() // POST /users 
    create(@Body() user: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        return this.usersService.create(user)
    }

    @Patch(':id') // PATCH /users/:id
    update(@Param('id') id: string, @Body() userUpdate: { name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        return this.usersService.update(+id, userUpdate)
    }

    @Delete(':id') // DELETE /users/:id
    delete(@Param('id') id: string) {
        return this.usersService.delete(+id)
    }
}


/* 
    GET /users
    GET /users/:id
        >> Orders Important If Have GET /users/Intern Have to Place before Get /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id

    http://localhost:3000/
*/