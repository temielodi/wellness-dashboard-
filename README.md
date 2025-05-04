# Next.js TypeScript dashboard

This project is a Next.js TypeScript dashboard for tracking wellness goals with authentication. Let's build this step by step.

## Project Features

### Dashboard Features

- Main dashboard with overview statistics and recent activity
- Goals tracking with progress indicators
- Progress visualization with charts
- Settings page for account management

### Key Components

2. **Dashboard Layout**:

a. Responsive sidebar navigation
b. User account dropdown
c. Mobile-friendly design

3. **Wellness Goals Tracking**:

1. Create and manage wellness goals
a. Track progress with interactive progress bars
b. Categorize goals (Fitness, Nutrition, Mental Health, etc.)
c. Visual progress charts

4. **User Settings**:

a. Profile management
b. Password updates
c. Notification preferences

This implementation uses Next.js App Router with TypeScript and shadcn/ui components for a clean, modern UI. The authentication system is implemented with server components and actions for security.

## Installation, Running and Contributing Instructions

### Install dependencies

```shellscript
npm install
# or
yarn install
# or
pnpm install
```

### Running the Development Server

```shellscript
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```shellscript
npm run build
# or
yarn build
# or
pnpm build
```

Then start the production server:

```shellscript
npm start
# or
yarn start
# or
pnpm start
```

## Project Structure

```plaintext
wellness-dashboard/
├── app/                    # Next.js App Router
│   ├── dashboard/          # Dashboard routes
│   │   ├── goals/          # Goals management
│   │   ├── progress/       # Progress tracking
│   │   ├── settings/       # User settings
│   │   └── layout.tsx      # Dashboard layout
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── ui/                 # UI components (shadcn/ui)
│   ├── dashboard-header.tsx
│   ├── dashboard-nav.tsx
│   ├── dashboard-shell.tsx
│   ├── goals-list.tsx
│   ├── overview.tsx
│   ├── recent-activity.tsx
│   └── user-account-nav.tsx
├── lib/                    # Utility functions
│   ├── auth.ts             # Mock user data
│   └── utils.ts            # Helper functions
├── public/                 # Static assets
└── README.md               # Project documentation
```

## Customization

### Adding New Goal Categories

To add new goal categories, modify the `initialGoals` array in `components/goals-list.tsx`:

```typescript
const initialGoals: Goal[] = [
  {
    id: "6",
    title: "Your New Goal",
    description: "Description of your new goal",
    category: "Your New Category",
    progress: 0,
    target: 100,
    unit: "units",
    dueDate: "2025-12-31",
  },
  // ... existing goals
];
```

### Modifying the Dashboard Layout

The dashboard layout is defined in `app/dashboard/layout.tsx`. You can modify this file to change the overall structure of the dashboard.

### Styling

This project uses Tailwind CSS for styling. You can customize the appearance by:

1. Modifying the `tailwind.config.js` file to change colors, fonts, etc.
2. Adding custom CSS in the `app/globals.css` file
3. Using Tailwind utility classes directly in the components

## Data Persistence

Currently, the application uses in-memory storage for demonstration purposes. To add persistence:

1. Add local storage integration to save goals in the browser
2. Implement a database connection (e.g., with Prisma, Drizzle, or Mongoose)
3. Update the goals-list.tsx component to fetch and save goals to your chosen storage solution

## Future Enhancements

- Add local storage for goal persistence
- Implement goal creation form
- Add goal filtering by category
- Implement dark mode
- Add data export functionality
- Add notifications and reminders

## Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Development Guidelines

- Follow the existing code style and structure
- Write clean, maintainable, and testable code
- Add appropriate comments and documentation
- Test your changes thoroughly

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Recharts](https://recharts.org/)