import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div className="error-page h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
    <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
    <p className="text-2xl font-semibold text-gray-800 mb-6">
      Oops! The page you're looking for doesn't exist.
    </p>
    <p className="text-gray-600 mb-8">
      It seems you might have taken a wrong turn.
    </p>
    <Link
      to="/"
      className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
    >
      Go Back Home
    </Link>
  </div>
  );
};

export default ErrorPage;