# NestJS

### Module
- In NestJS, a module is a way to organize related components like controllers, services, and providers into a self-contained unit.

- For example, if you have a UsersModule, it would handle everything related to user management (e.g., authentication, user profiles, database operations).

### Controllers
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