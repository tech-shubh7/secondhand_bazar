# Enterprise-Grade Node.js Backend Best Practices Guide

## 1. Project Structure

- Use a clear, modular structure:
  - /src
    - /config
    - /controllers
    - /middleware
    - /models
    - /routes
    - /services (for business logic)
    - /utils (for helpers)
  - /prisma (for schema and migrations)
  - /tests (for unit/integration tests)
  - index.js (entry point)

## 2. Naming Conventions

- Use camelCase for variables and functions: `getUserProfile`
- Use PascalCase for classes: `UserService`
- Use kebab-case for file and folder names: `user-controller.js`, `auth-middleware.js`
- Use UPPER_SNAKE_CASE for constants: `JWT_SECRET`
- API endpoints: use kebab-case and plural nouns: `/api/v1/users`, `/api/v1/auth/login`

## 3. Code Style

- Use 2 spaces for indentation (configure Prettier)
- Always use semicolons
- Use single quotes for strings
- Keep line length <= 100 chars
- Use ESLint for linting
- Use async/await, never mix with .then/.catch
- Always handle errors (try/catch or error middleware)

## 4. API Design

- Use RESTful conventions
- Version your API: `/api/v1/`
- Use proper HTTP status codes
- Use consistent response structure:
  ```json
  {
    "success": true,
    "data": {...},
    "message": "..."
  }
  ```
- Never expose sensitive data (like passwords)
- Validate all input (use Joi, Zod, or express-validator)

## 5. Security

- Use helmet, rate limiting, and CORS
- Store secrets in .env, never in code
- Use secure cookies and HTTPS in production
- Sanitize all input to prevent injection

## 6. Database (Prisma)

- Use singular model names: `User`, `Product`
- Use snake_case for database fields: `created_at`, `updated_at`
- Use migrations for schema changes
- Never expose internal DB errors to clients

## 7. Environment

- Use dotenv for config
- Separate dev, test, prod configs
- Never commit .env or node_modules

## 8. Testing

- Use Jest or Mocha for tests
- Write unit and integration tests
- Use a /tests folder mirroring /src

## 9. Documentation

- Use JSDoc for functions
- Maintain a README with setup, usage, and API docs

## 10. CI/CD

- Use GitHub Actions or similar for lint/test/build
- Enforce code review and PR checks

---

# Current Project: Fixes & Recommendations

## Folder/File Naming
- Rename files/folders to kebab-case (e.g., `auth-middleware.js`)
- Use /services and /utils for business logic and helpers
- Move Prisma config to /prisma

## Code Style
- Add Prettier and ESLint configs
- Enforce 2-space indentation, single quotes, and semicolons

## API
- Prefix all routes with `/api/v1/`
- Use plural nouns for resources
- Standardize response format

## Security
- Ensure helmet, rate limiting, and CORS are configured
- Remove password from all responses

## Database
- Use snake_case for DB fields in Prisma schema
- Use singular model names

## Testing
- Add a /tests folder and basic test setup

---

# Next Steps
1. Refactor file/folder names to kebab-case
2. Add Prettier and ESLint configs
3. Refactor API endpoints to `/api/v1/`
4. Standardize response format
5. Add /services and /utils folders
6. Update Prisma schema to use snake_case
7. Add a /tests folder

Follow this guide for all future development to ensure enterprise-level quality.