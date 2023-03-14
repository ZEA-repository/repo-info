import { useState } from 'react'

export const Search: React.FC<{
  initialValue: string
  onSubmit: (value: string) => void
}> = ({ initialValue, onSubmit }) => {
  const [value, setValue] = useState(initialValue)

  return (
    <form
      className='mb16'
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit(value)
      }}
    >
      <label>
        Search Repositories:{' '}
        <input
          type='text'
          placeholder='github repository name'
          value={value}
          onChange={(event) => {
            setValue(event.target.value)
          }}
        />
      </label>
      <input type='submit' value='Search' />
      <input
        type='button'
        value='Clear'
        onClick={() => {
          setValue('')
          onSubmit('')
        }}
      />
    </form>
  )
}
