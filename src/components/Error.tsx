import type {PropsWithChildren} from 'react'

export const Error = ({children}: PropsWithChildren) => {
  return (
    <p className='text-center bg-red-600 uppercase text-sm p-3 my-4 text-white font-bold'>{children}</p>
  )
}
