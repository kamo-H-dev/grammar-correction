'use client';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { checkTextGrammar} from '@/app/actions/checkTextGrammar';
import MyMessage from '@/app/ui/myMessage';
import Output from '@/app/ui/output';
import { logout } from '@/app/actions/auth';

export default function TextChecker() {
  const [inputValue, setInputValue] = useState('');
  const [value] = useDebounce(inputValue, 500);
  const [incorrectWords, setIncorrectWords] = useState([]);
  
  async function  handleLogOut() {
    await logout();
  }

  useEffect(() => {
    (async () => {
      if (!value) {
        return;
      }
      try {
        const res = await checkTextGrammar(value);
        if (res?.success && res.result) {
            setIncorrectWords(res.result);
        }
      } catch (e) {
        console.log('error', e);
      }
    })();
  }, [value]);
  
  
  return (
    <div className='relative p-6 mx-auto min-h-screen w-full bg-gray-50 dark:bg-gray-800'>
      <button
        onClick={handleLogOut}
        className='absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all'
      >
        Logout
      </button>
      <div className='max-w-2xl mx-auto'>
        <MyMessage inputValue={inputValue} setInputValue={setInputValue} />
            <div className='mt-6 bg-gray-100 p-5 rounded-md border border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600'>
                <Output inputValue={inputValue} incorrectWords={incorrectWords} />
            </div>
          
      </div>
    </div>
  );
  
}
