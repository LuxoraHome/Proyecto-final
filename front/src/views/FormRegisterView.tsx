const FormRegisterView = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 border border-gray-300 w-full max-w-md shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-2 text-center">New Customer?</h2>
        <p className="text-sm text-gray-500 mb-4 text-center">All fields are required.</p>

        <form>
          <label className="block text-sm font-medium">Marital Status</label>
          <select className="w-full border border-gray-300 p-2 mb-4 rounded">
            <option>Mr.</option>
            <option>Mrs.</option>
            <option>Miss</option>
            <option>Ms.</option>
            <option>Dr.</option>
            <option>Other</option>
          </select>

          <label className="block text-sm font-medium">First Name:</label>
          <input type="text" className="w-full border border-gray-300 p-2 mb-4 rounded" />

          <label className="block text-sm font-medium">Last Name:</label>
          <input type="text" className="w-full border border-gray-300 p-2 mb-4 rounded" />

          <label className="block text-sm font-medium">Mobile:</label>
          <input type="text" className="w-full border border-gray-300 p-2 mb-4 rounded" />

          <label className="block text-sm font-medium">Email</label>
          <input type="email" className="w-full border border-gray-300 p-2 mb-4 rounded" placeholder="(name@luxora.com)"/>

          <label className="block text-sm font-medium">Password</label>
          <input type="password" className="w-full border border-gray-300 p-2 mb-2 rounded" />

          <label className="block text-sm font-medium">Confirm Password</label>
          <input type="password" className="w-full border border-gray-300 p-2 mb-4 rounded" />

          <div className="flex items-start mb-2">
            <input type="checkbox" className="mr-2" />
            <p className="text-sm">
              By checking this box, you accept the processing of your personal data by Luxora under the conditions established in our <a href="#" className="text-blue-600">Terms of Use</a> and <a href="#" className="text-blue-600">Privacy Policy</a> and confirm that you have understood it.
            </p>
          </div>
          <div className="flex items-start mb-4">
            <input type="checkbox" className="mr-2" />
            <p className="text-sm">I would like to receive news from Luxora and stay informed about upcoming events. I accept receiving proposals via email.</p>
          </div>

          <button className="w-full bg-black text-white p-3 font-medium rounded">REGISTER</button>
        </form>
      </div>
    </div>
  );
};

export default FormRegisterView;
