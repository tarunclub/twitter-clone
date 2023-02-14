import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import { Navigate } from 'react-router-dom/dist';
import Profile from './pages/Profile';

function App() {
  const currUser = true;

  const Layout = () => {
    return (
      <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
        <main className="grid grid-cols-9">
          {/* Sidebar */}
          <Sidebar />
          {/* Feed */}
          <Feed />
          {/* Widgets */}
          <Widgets />
        </main>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout />,
        </ProtectedRoute>
      ),
    },
    {
      path: '/profile/:id',
      element: (
        <ProtectedRoute>
          <Profile />,
        </ProtectedRoute>
      ),
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
