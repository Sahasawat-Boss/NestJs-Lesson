import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get() // GET /users or GET /users?role=value
    // EX>>  /users?role=ADMIN
    findAll(@Query('role') role?:'INTERN'|'ADMIN'|'TEACHER')
    {
        return ['GET API Work']
    }

    @Get('interns') // Get /users/Interns
    findAllInterns() {
        return ['GET /users/Interns Work']
    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id') id: string) {
        return { id }
    }

    @Post() // Post /users
    create(@Body() user: {}) {
        return user
    }

    @Patch(':id') //PATCH /users/:id
    update(@Param(':id') id:String, @Body() userUpdate: {})
    {
        return {id, ...userUpdate}
    }

    @Delete(':id') // DELETE /users/:id
    delete(@Param('id') id: string) {
        return { id }
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