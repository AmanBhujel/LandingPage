import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './globals.css'
export const metadata = {
  title: 'Nephara',
  description: 'Nephara - Leading Ecommerce Site in Nepal',
};

export default function RootLayout({ children }) {
  return (
    <>

      <html lang="en">
        <head>  <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@1,700&family=Poppins:ital@1&family=Work+Sans:ital,wght@1,300&display=swap"
          rel="stylesheet"
        /></head>
        <body>
          {children}
          <ToastContainer theme='dark'/>
          </body>
      </html>
    </>
  );
}
