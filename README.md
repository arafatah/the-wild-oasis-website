# The Blue Ridge - Luxury Cabin Resort

A modern, full-featured cabin resort booking application built with Next.js, featuring cabin browsing, reservation management, and user account features.

## Overview

The Blue Ridge is a luxurious cabin resort that offers a beautiful getaway experience. This application serves as both an informational website for potential guests and a comprehensive booking management system.

## Features

- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **Cabin Management**: Browse and view detailed information about available cabins
- **Reservation System**: Complete booking system with reservation creation and management
- **User Authentication**: Secure login and account management
- **Profile Management**: Users can update their profile information
- **Dynamic Content**: Server-side rendering for optimal performance
- **Filtering Options**: Filter cabins based on different criteria

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Authentication**: NextAuth.js
- **Database**: Supabase
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: React Context API

## Project Structure

```
app/                    # Main application code
├── _components/        # Shared components
│   ├── Cabin.js        # Cabin component
│   ├── CabinCard.js    # Card display for cabins
│   ├── ReservationForm.js # Booking form
│   └── ...
├── _lib/               # Utility functions and services
│   ├── actions.js      # Server actions
│   ├── auth.js         # Authentication utilities
│   ├── data-service.js # Data fetching services
│   └── supabase.js     # Supabase client
├── _styles/            # Global styles
├── about/              # About page
├── account/            # User account pages and reservations
├── api/                # API routes
├── cabins/             # Cabin listing and details
└── login/              # Authentication pages
```

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd the-wild-oasis-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Key Components

- **CabinList**: Displays all available cabins with filtering options
- **ReservationForm**: Handles the creation and editing of bookings
- **DateSelector**: Custom date picker for selecting booking dates
- **UpdateProfileForm**: Allows users to update their profile information

## Pages

- **Home**: Landing page showcasing the resort
- **Cabins**: Browse all available cabins
- **Cabin Details**: View detailed information about a specific cabin
- **About**: Information about the resort
- **Login**: User authentication
- **Account**: User profile and reservation management
- **Reservations**: View and manage user bookings

## Authentication Flow

The application uses NextAuth.js for authentication, integrated with Supabase as the database. Users can sign up, sign in, and manage their profiles.

## Reservation System

The booking system allows users to:
- Select dates for their stay
- Choose specific cabins
- Review booking details
- Manage their existing reservations

## License

[MIT](LICENSE)

## Acknowledgments

- Built as part of an advanced Next.js learning project
- UI/UX inspired by modern luxury resort websites