import logo from '@/assets/logo.png';
import { FormInput } from '@/components';
import { useAuthStore } from '@/store';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const Login = () => {
  const { login, isLoggingIn } = useAuthStore();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = formData.email.trim().toLowerCase();
    const { password } = formData;

    if (!email || !password) {
      toast.error('Fill in all fields');
      return;
    }

    try {
      await login({ email, password });
      toast.success('Logged In');
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Login failed');
    }
  };
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
        <form
          className='flex flex-col items-center space-y-2'
          onSubmit={handleSubmit}
        >
          <FormInput
            label='Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />

          <FormInput
            type='password'
            name='password'
            label='Password'
            value={formData.password}
            onChange={handleChange}
          />
          <div className='w-full sm:w-auto mt-2'>
            <button
              className='cursor-pointer active:scale-[0.98] bg-foreground text-white font-bold px-3 py-2 rounded-xl w-full sm:w-40'
              disabled={isLoggingIn}
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className='size-4 animate-spin' />
                  Signing in
                </>
              ) : (
                'Sign In'
              )}
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
