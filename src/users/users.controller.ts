import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get() // GET /users
    findAll() {
        return ['GET /users Work']
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