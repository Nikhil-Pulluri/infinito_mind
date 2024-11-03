import { useState } from 'react'

export default function Theme() {
  const [theme, setTheme] = useState('light')
  return <div className="flex items-center space-x-2 text-black">{theme === 'light' ? <div>dark</div> : <div>dark</div>}</div>
}
