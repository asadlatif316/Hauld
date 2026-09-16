import logo from '@/assets/logo.png';

const Login = () => {
  return (
    <div className='bg-secondary flex flex-col items-center justify-center h-screen w-full'>
      <div className='bg-card w-full max-w-sm px-6 py-6 border-2 rounded-2xl shadow-md'>
        <div className='mb-4 flex flex-col items-center space-y-1'>
          <div className='mb-3'>
            <img src={logo} alt='' className='h-12' />
          </div>
          <h2 className='text-xl font-bold text-center'>Login</h2>
          <p className='text-muted-foreground text-sm text-center'>
            Login to the admin dashboard
          </p>
        </div>
        <form className='flex flex-col items-center space-y-2'>
          <div className='flex flex-col w-full gap-1.5'>
            <label className='font-medium' htmlFor='name'>
              Email
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='h-8 min-w-0 block rounded-md border-2 bg-input/10 px-3 py-4 text-foreground transition-all outline-none ease-in duration-200 focus-visible:ring-2 focus-visible:ring-ring/30 disabled:opacity-30 disabled:cursor-not-allowed border-input'
            />
          </div>

          <div className='flex flex-col w-full gap-1.5'>
            <label className='font-medium' htmlFor='name'>
              Password
            </label>
            <input
              type='password'
              id='name'
              name='name'
              className='h-8 min-w-0 block rounded-md border-2 bg-input/20 px-3 py-4 text-foreground transition-all outline-none ease-in duration-200 focus-visible:ring-2 focus-visible:ring-ring/30 disabled:opacity-30 disabled:cursor-not-allowed border-input'
            />
          </div>
          <div className='w-full sm:w-auto mt-2'>
            <button className='cursor-pointer active:scale-[0.98] bg-foreground text-white font-bold px-3 py-2 rounded-xl w-full sm:w-40'>
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
