import React from 'react'
import PropTypes from 'prop-types';

export const AuthTemplate = ({children}) => {
  return (
    <main className=" bg-gray-50 flex flex-wrap justify-center items-center w-full h-screen">
      <article className=" w-11/12 max-w-4xl flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row dark:border-gray-700 dark:bg-gray-800">
        {children}
      </article>
    </main>
  )
}

AuthTemplate.propTypes = {
    children: PropTypes.array.isRequired
}