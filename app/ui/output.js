'use client';

export default function Output({inputValue, incorrectWords}) {
  return (
    <>
      <h2 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
        Output
      </h2>
      {incorrectWords.length > 0 ? (inputValue.split(' ').map((word, index) => {
        if (incorrectWords.includes(word)) {
          return (
            <span key={index} className='text-red-500 font-bold'>
                {word}{' '}
            </span>
          );
        } else {
          return (
            <span key={index} className='text-white font-bold'>
                      {word}{' '}
            </span>
          );
        }
      })) : <span className='text-white font-bold'>{inputValue}</span>}
    </>
  );
}
