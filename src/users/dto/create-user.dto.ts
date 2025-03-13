//npm i @nestjs/mapped-types -D
//npm install class-validator class-transformer
import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

// DTO (Data Transfer Object) for creating a user
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;     // Ensures 'name' is a string and cannot be empty

    @IsEmail()
    email: string;     // Validates that 'email' is a properly formatted email

    @IsEnum(["INTERN", "ENGINEER", "ADMIN"], {
        message: 'Valid role required'
    })
    role: "INTERN" | "ENGINEER" | "ADMIN";
}

    // Restricts 'role' to specific values (INTERN, ENGINEER, ADMIN)
    // If an invalid role is provided, a custom error message is returned
