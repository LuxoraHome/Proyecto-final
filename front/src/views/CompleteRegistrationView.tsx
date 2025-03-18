import Link from 'next/link'

export const CompleteRegistrationView: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-8 shadow-xl w-full sm:w-2/3 lg:w-2/3 xl:w-2/3 max-w-4xl">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-900">
            LUXORA
          </h1>
        </div>
  
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-900">
          Complete Your Profile or Continue Browsing
        </h2>
        <p className="text-center mb-6 text-gray-700 text-lg">
          You can either finish your profile now or continue navigating. Your profile will help improve your experience.
        </p>
  
        <div className="flex justify-center mb-6">
          <div className="w-full h-96 overflow-hidden">
            <img
              src="/assets/completeRegistration.jpeg"
              alt="Profile Suggestion"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
  
        <div className="flex flex-col sm:flex-row sm:justify-between sm:space-x-4 mt-6">
          <Link
            href="/"
            className="bg-transparent text-gray-700 py-2 px-6 border-2 border-gray-700 text-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full sm:w-auto mb-4 sm:mb-0"
          >
            Continue Browsing
          </Link>
          <Link
            href="/formCompleteRegistration"
            className="bg-black text-white py-2 px-6 text-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black w-full sm:w-auto"
          >
            Finish Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
