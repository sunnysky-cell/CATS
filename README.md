# CATS

Course Application & Training System (CATS) is a role-based web application for managing employee training requests, approvals, allowances, course completion, and fee claims.

## Features

- Employees submit and update course applications, track their status, view annual training allowances, and file fee claims after completing a course.
- Managers review applications and claims, check team training conflicts, and export attendance or budget reports as CSV files.
- Administrators manage users, reporting relationships, course categories, public holidays, and yearly entitlements.
- The system calculates training days, excludes weekends and configured public holidays, and supports half-day internal training.
- A monthly training calendar shows approved courses. Personal calendar events use a separate authenticated API.
- The role-aware assistant demo reads authorised CATS pages and offers suggestions without calling write endpoints.

## Technology

| Area | Technology |
| --- | --- |
| Backend | Java 21, Spring Boot 4.1.1, Spring MVC |
| Data and security | Spring Data JPA, Spring Security, BCrypt, MySQL |
| Server-rendered UI | Thymeleaf, HTML, CSS, JavaScript |
| Component source | React 19, TypeScript, Vite |
| Build and tests | Maven Wrapper, JUnit, Node test runner |

The compiled frontend bundles are committed under `CATS/src/main/resources/static/assets`, so Node.js is not required to run the application.

## Project layout

```text
.
├── CATS/
│   ├── src/main/java/                 # Controllers, services, models and repositories
│   ├── src/main/resources/templates/  # Thymeleaf pages
│   ├── src/main/resources/static/     # Browser assets and compiled bundles
│   ├── src/test/                      # Backend tests
│   ├── frontend-source/               # React and TypeScript source
│   └── pom.xml
├── CATS-智能助手更新指南-Agent-Update-Guide.docx
└── README.md
```

## Prerequisites

- JDK 21
- MySQL 8 or a compatible MySQL server
- Node.js 22.12 or later, only when rebuilding the React components

## Run the application

1. Clone the repository and enter the application directory.

   ```bash
   git clone https://github.com/sunnysky-cell/CATS.git
   cd CATS/CATS
   ```

2. Create an empty MySQL database.

   ```sql
   CREATE DATABASE cats
     CHARACTER SET utf8mb4
     COLLATE utf8mb4_unicode_ci;
   ```

3. Set the database connection for the current terminal. Replace `your_mysql_password` with your local MySQL password.

   ```bash
   export SPRING_DATASOURCE_URL="jdbc:mysql://localhost:3306/cats"
   export SPRING_DATASOURCE_USERNAME="root"
   export SPRING_DATASOURCE_PASSWORD="your_mysql_password"
   export SPRING_JPA_HIBERNATE_DDL_AUTO="update"
   ```

4. Start CATS with the Maven Wrapper.

   ```bash
   sh mvnw spring-boot:run
   ```

5. Open [http://localhost:8080/login](http://localhost:8080/login). The administrator login page is also available at [http://localhost:8080/admin/login](http://localhost:8080/admin/login).

The data initializer creates the demo users, course categories, public holiday, and current-year entitlements when the user table is empty.

## Initial accounts

| Role | Username | Password |
| --- | --- | --- |
| Administrator | `admin` | `password123` |
| Manager | `manager` | `password123` |
| Employee | `emp1` | `password123` |
| Employee | `emp2` | `password123` |

These credentials support local development and assessment demonstrations. Change them before deploying CATS to a shared or public environment.

## Tests

Run the backend test suite from the `CATS` directory:

```bash
sh mvnw test
```

Run the frontend checks when you change files under `frontend-source`:

```bash
cd frontend-source
npm ci
npm test
npm run typecheck
```

Build the React components with `npm run build`. Vite writes the bundles to `src/main/resources/static/assets`.

## Documentation and licences

- `CATS/CHANGELOG_EN.txt` records changes and verification results in English.
- `CATS/CHANGELOG.txt` contains the Chinese changelog.
- `CATS/THIRD-PARTY-LICENSES.txt` lists third-party software and licence notices.
- `CATS-智能助手更新指南-Agent-Update-Guide.docx` explains the assistant demo and its presentation flow.

## AI use declaration

I used OpenAI Codex (GPT-5) to analyse the repository, draft and refine this README, improve its expression, check setup commands against the project files, and document the demo accounts. I am responsible for the content and quality of the submitted work.
