import logo from '@/assets/logo.png';
import { FormInput } from '@/components';

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
          <FormInput label='Email' name='email' />

          <FormInput type='password' name='password' label='Password' />
          <div className='w-full sm:w-auto mt-2'>
            <button className='cursor-pointer active:scale-[0.98] bg-foreground text-white font-bold px-3 py-2 rounded-xl w-full sm:w-40'>
              Sign In
            </button>
          </div>
        </form>
        <div className='mt-4 w-full rounded-md border bg-muted/50 px-3 py-2 text-xs text-muted-foreground'>
          <p className='font-medium text-foreground'>Demo account</p>
          <p>admin@hauld.dev · Admin@12345</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
