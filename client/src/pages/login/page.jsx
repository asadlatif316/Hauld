const Login = () => {
  return (
    <div className='bg-secondary flex flex-col items-center justify-center h-screen w-full'>
      <div className='bg-card h-100 w-full max-w-sm px-6 py-4'>
        <form>
          <div className='flex flex-col w-full gap-1.5'>
            <label htmlFor='name'>Email</label>
            <input
              type='text'
              id='name'
              name='name'
              className='h-8 min-w-0 block rounded-md border-2 bg-input/20 px-3 py-2 text-foreground transition-all outline-none ease-in duration-200 focus-visible:ring-2 focus-visible:ring-ring/30 disabled:opacity-30 disabled:cursor-not-allowed'
            />
          </div>

          <div className='flex flex-col w-full gap-1.5'>
            <label htmlFor='name'>Password</label>
            <input
              type='password'
              id='name'
              name='name'
              className='h-8 min-w-0 block rounded-md border-2 bg-input/20 px-3 py-2 text-foreground transition-all outline-none ease-in duration-200 focus-visible:ring-2 focus-visible:ring-ring/30 disabled:opacity-30 disabled:cursor-not-allowed'
            />
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
