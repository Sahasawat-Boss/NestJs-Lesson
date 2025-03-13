// npm i @nestjs/mapped-types -D 

import { CreateUserDto } from "./create-user.dto";  // Import the base DTO
import { PartialType } from "@nestjs/mapped-types"; // Import PartialType to make fields optional

export class UpdateUserDto extends PartialType(CreateUserDto) { }
// The UpdateUserDto extends CreateUserDto but makes all fields optional