'use client';

export default function MyMessage({inputValue, setInputValue}) {
  
  return (
    <>
      <label
        htmlFor='message'
        className='block mb-4 text-lg font-medium text-gray-900 dark:text-white'
      >
        Your message
      </label>
      <textarea
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
        id='message'
        rows='6'
        className='block w-full p-4 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        placeholder='Write your thoughts here...'
      ></textarea>
    </>
  );
}
