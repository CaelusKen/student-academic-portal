# Student Academic Portal - Next.js Application

A modern, full-stack web application built with Next.js 15, featuring a robust UI component library and authentication system.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Beautiful UI**: Powered by Radix UI components and Tailwind CSS
- **Authentication**: Secure authentication system using Supabase
- **Form Handling**: Advanced form management with React Hook Form and Zod validation
- **Responsive Design**: Mobile-first approach with modern UI components
- **Dark Mode**: Built-in theme support with next-themes
- **Data Visualization**: Interactive charts using Recharts
- **Type Safety**: Full TypeScript support for better development experience

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (Latest LTS version recommended)
- [Bun](https://bun.sh/) - Fast JavaScript runtime & package manager
- Git

## 🛠️ Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd student-fap
```

2. Install dependencies using Bun:
```bash
bun install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🚀 Development

To start the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Structure

```
src/
├── app/          # Next.js app directory (pages and layouts)
├── components/   # Reusable UI components
├── lib/          # Utility functions and configurations
├── hooks/        # Custom React hooks
└── middleware.ts # Next.js middleware for authentication
```

## 🛠️ Available Scripts

- `bun dev` - Start development server with Turbopack
- `bun run build` - Build the application for production
- `bun run start` - Start the production server
- `bun run lint` - Run ESLint for code linting

## 🎨 UI Components

This project uses a comprehensive set of UI components from Radix UI, including:
- Accordion
- Alert Dialog
- Avatar
- Checkbox
- Dialog
- Dropdown Menu
- Navigation Menu
- Tabs
- And many more...

## 🔒 Authentication

Authentication is handled through Supabase, providing:
- Secure user authentication
- Session management
- Protected routes

## 📦 Dependencies

### Core Dependencies
- Next.js 15.1.3
- React 19
- TypeScript
- Tailwind CSS
- Supabase

### UI Components
- Radix UI components
- Lucide React icons
- Recharts for data visualization
- React Hook Form for form handling
- Zod for schema validation

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Radix UI](https://www.radix-ui.com/)
- [Supabase](https://supabase.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Bun](https://bun.sh/)
