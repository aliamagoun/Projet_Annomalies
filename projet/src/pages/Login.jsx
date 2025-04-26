const Login = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-brand-dark">Connexion</h1>
          <form>
            <input type="email" placeholder="Email" className="w-full mb-4 p-3 border rounded" />
            <input type="password" placeholder="Mot de passe" className="w-full mb-4 p-3 border rounded" />
            <button type="submit" className="w-full bg-brand-orange text-white py-2 rounded">Se connecter</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;
  