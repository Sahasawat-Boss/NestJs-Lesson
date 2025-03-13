# NestJS

### Module
- In NestJS, a module is a way to organize related components like controllers, services, and providers into a self-contained unit.

- For example, if you have a UsersModule, it would handle everything related to user management (e.g., authentication, user profiles, database operations).

### Controllers
- https://docs.nestjs.com/controllers
- A Controller is responsible for handling incoming HTTP requests and sending responses to the client.

- How Controllers Work
- @Controller('users') → Maps requests to /users
- @Get() → Handles GET /users requests
- @Post() → Handles POST /users requests
- Calls UsersService for logic (separation of concerns)

### Providers
- A Provider is a service, repository, or helper class that contains business logic and can be injected into other components using Dependency Injection (DI).
 
- How Providers Work
- @Injectable() → Marks it as a provider (so it can be injected).
- findAll() → Returns a list of users.
- create() → Adds a new user.

### Services (UsersService) – Handles Business Logic & Data
- A service stores, processes, and manages data.
- It keeps the core logic separate so controllers remain clean.
- If you need to change the logic later (e.g., connect to a database), - you only update the service, not every controller.

#### Why Should You Use a Service?
✅ Keeps the code organized – Controllers handle only requests, while services manage the logic.
✅ Reusability – Other parts of the app (like another controller) can reuse the service.
✅ Easy to switch databases – If you replace an in-memory array with PostgreSQL, you only update the service.