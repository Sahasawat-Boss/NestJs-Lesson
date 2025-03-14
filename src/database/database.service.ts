import { Injectable, OnModuleInit } from '@nestjs/common';  // ✅ Import NestJS Injectable and lifecycle hook
import { PrismaClient } from '@prisma/client';  // ✅ Import PrismaClient to interact with the database

@Injectable()  // ✅ Marks this class as a provider (Dependency Injection)
export class DatabaseService extends PrismaClient implements OnModuleInit {

    // ✅ Lifecycle hook to run when the module is initialized
    async onModuleInit() {
        await this.$connect();  // ✅ Ensures the database connection is established when the app starts
    }
}
