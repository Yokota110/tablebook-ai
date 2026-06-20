# TableBook

Modern restaurant reservation platform for global restaurant groups, focused on Japan and Singapore demo markets.

TableBook is a production-style full-stack SaaS application that helps customers discover restaurants, reserve tables online, and gives restaurant operators analytics, table management, and reservation workflows.

## Live Demo

Coming soon.

## Overview

TableBook is inspired by restaurant booking products such as OpenTable and Resy. The current demo environment uses restaurants, guest behavior, analytics, dates, and currency copy tailored around Tokyo, Kyoto, Osaka, and Singapore.

The project demonstrates modern full-stack development with Next.js, NestJS, PostgreSQL, Prisma, TypeScript, Docker, and AWS-ready architecture.

## Features

### Customer

- User authentication
- Restaurant discovery
- Search and filtering
- Restaurant details and galleries
- Real-time availability display
- Online reservations
- Reservation history
- Reservation cancellation

### Restaurant Experience

- Japan and Singapore restaurant dataset
- Cuisine filtering
- City filtering
- Price range filtering
- Rating filtering
- Popular time indicators
- Recommended reservation slots
- Amenities and service information

### Operator

- Reservation management
- Restaurant management
- Table management
- Analytics dashboard
- Occupancy tracking
- Peak hour analysis
- Revenue monitoring
- AI-style business insights

## Screenshots

### Landing Page

![Landing Page](docs/landing-page.png)

### Restaurant Discovery

![Restaurant Discovery](docs/restaurant-discovery.png)

### Restaurant Details

![Restaurant Details](docs/restaurant-detail.png)

### Analytics Dashboard

![Analytics Dashboard](docs/admin-dashboard.png)

## Tech Stack

### Frontend

- Next.js 15
- React
- TypeScript
- Tailwind CSS
- shadcn/ui-style components
- TanStack Query
- React Hook Form
- Zod

### Backend

- NestJS
- TypeScript
- Prisma ORM

### Database

- PostgreSQL

### Infrastructure

- Docker Compose for local services
- AWS-ready backend architecture
- Vercel-ready frontend deployment

## Architecture

```text
Frontend (Next.js)
  -> REST API
  -> Backend (NestJS)
  -> PostgreSQL
```

## Folder Structure

```text
table-book
  frontend/
    app/
    components/
    lib/
    public/
  backend/
    prisma/
    src/
    test/
  docs/
```

## Installation

Clone the repository:

```bash
git clone https://github.com/Yokota110/tablebook-ai.git
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run start:dev
```

## Environment Variables

### Frontend

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

### Backend

```env
DATABASE_URL=
JWT_SECRET=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
AWS_S3_BUCKET=
```

## Database

Main entities:

- Users
- Restaurants
- Tables
- Reservations

## Localization

The project includes Japan and Singapore focused restaurant data and business workflows.

Examples:

- Tokyo
- Kyoto
- Osaka
- Singapore
- Japanese Kaiseki
- Ramen and Izakaya
- Modern Singaporean
- Singaporean Chinese

Currency display:

```text
USD (US$)
```

## Future Improvements

- AI restaurant insights
- OpenAI integration
- Email notifications
- Payment integration
- Mobile application
- Multi-branch management
- Customer loyalty program

## Author

**Yokota Ishun**  
Freelance Full Stack Developer, Shiki, Saitama, Japan

After building enterprise web systems and React/Node.js SaaS platforms at Neusoft and Neusoft Reach in China, I have worked as a freelance developer in Japan since 2023, delivering web applications with Next.js, NestJS, PostgreSQL, and AWS.

TableBook is a portfolio project showcasing modern full-stack SaaS development with the same stack.

- **Email:** [richunyokota93@gmail.com](mailto:richunyokota93@gmail.com)
- **GitHub:** [Yokota110/tablebook-ai](https://github.com/Yokota110/tablebook-ai)

## License

This project was created for portfolio and educational purposes by Yokota Ishun.
