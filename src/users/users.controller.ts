import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto'; //>Use it update
import { CreateUserDto } from './dto/create-user.dto'; //>Use it create

//Ensures Numeric Input – Converts a string to an integer.

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
    findOne(@Param('id', ParseIntPipe) id: number ) {
        return this.usersService.findOne(id)
    }

    @Post() // POST /users 
    create(@Body(ValidationPipe) createUserDTO: CreateUserDto) {
        return this.usersService.create(createUserDTO)
    }

    @Patch(':id') // PATCH /users/:id
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto) {
        return this.usersService.update(id, updateUserDto)
    }

    @Delete(':id') // DELETE /users/:id
    delete(@Param('id', ParseIntPipe ) id: number) {
        return this.usersService.delete(id)
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