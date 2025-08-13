# Sales Dashboard - Next.js

A modern, responsive sales monitoring dashboard built with Next.js 15 and React 19. This dashboard provides comprehensive sales analytics, reporting, and monitoring capabilities with a beautiful and intuitive user interface.

## Features

### 🎨 Modern UI/UX
- Clean and professional design
- Responsive layout that works on all devices
- Dark/light theme support
- Smooth animations and transitions

### 📊 Dashboard Components
- **Statistics Cards**: Real-time sales metrics and KPIs
- **Annual Reports**: Comprehensive sales and revenue analysis
- **Interactive Charts**: Visual data representation
- **Sales Monitoring**: Live sales tracking and analytics
- **Order Management**: Order processing and tracking
- **Revenue Analytics**: Detailed revenue breakdown

### 🧭 Navigation
- **Sidebar Navigation**: Collapsible sidebar with organized menu structure
- **Breadcrumb Navigation**: Clear page hierarchy
- **Search Functionality**: Global search across the application
- **User Profile**: User management and settings

### 📱 Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interface
- Adaptive layouts

## Technology Stack

- **Framework**: Next.js 15.4.6
- **React**: 19.1.0
- **Styling**: CSS Modules + Global CSS
- **Icons**: Feather Icons
- **UI Components**: Custom components with Bootstrap-inspired styling
- **Development**: Turbopack for fast development

## Project Structure

```
sales-dashboard/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Sidebar.js          # Main navigation sidebar
│   │   │   ├── Header.js           # Top navigation header
│   │   │   └── DashboardContent.js # Main dashboard content
│   │   ├── layout.js               # Root layout component
│   │   └── page.js                 # Home page
│   └── styles/
│       └── globals.css             # Global styles and theme
├── public/
│   └── images/                     # Static images and assets
└── package.json
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sales-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Dashboard Sections

### 1. Main Navigation
- **Dashboard**: Sales monitoring and analytics
- **Mailbox**: Email management with notifications
- **Widgets**: Custom dashboard widgets
- **Elements**: UI components and elements
- **Extras**: Additional features and pages

### 2. Statistics Overview
- **Today Orders**: Current day order statistics
- **Today Earnings**: Daily revenue tracking
- **Product Sold**: Product sales metrics
- **Total Earnings**: Overall revenue summary

### 3. Analytics & Reports
- **Annual Reports**: Yearly sales and revenue analysis
- **Sales Analytics**: Detailed sales performance
- **Order Tracking**: Order management and status
- **Revenue Monitoring**: Revenue trends and patterns

## Customization

### Adding New Pages
1. Create a new component in `src/app/components/`
2. Add the route to the sidebar navigation
3. Update the layout if needed

### Styling
- Global styles are in `src/styles/globals.css`
- Component-specific styles use CSS Modules
- Theme variables can be modified in the CSS file

### Data Integration
The dashboard is designed to be easily integrated with:
- REST APIs
- GraphQL endpoints
- Real-time data sources
- Database connections

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized for fast loading
- Lazy loading for components
- Efficient state management
- Minimal bundle size

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository.

---

**Built with ❤️ using Next.js and React**
