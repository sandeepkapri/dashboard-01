import { Poppins } from 'next/font/google'
import '../styles/globals.css'
import Sidebar from './components/Sidebar'
import { SidebarProvider } from './context/SidebarContext'
import LayoutContent from './components/LayoutContent'

const poppins = Poppins({
  subsets: ['latin'],           // Specify the character subsets you want
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Optional: specify font weights
  display: 'swap',              // Optional: font-display strategy
  variable: '--font-poppins',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Sales Monitoring Dashboard" />
        <title>Sales Monitoring | Metrical - Multipurpose Admin Dashboard Template</title>
        {/* Icon font styles for navbar and UI icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/css/flag-icon.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </head>
      <body className={poppins.className}>
        <SidebarProvider>
          <LayoutContent>{children}</LayoutContent>
        </SidebarProvider>

        {/* Bootstrap and jQuery Scripts */}
        <script src="https://code.jquery.com/jquery-3.7.1.min.js" defer></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" defer></script>
        <script src="https://unpkg.com/ionicons@2.0.1/dist/ionicons.js" defer></script>
      </body>
    </html>
  );
}
