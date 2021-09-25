import React, { createContext, useContext, useState } from 'react'

type ThemeType = 'primary' | 'ghost'

const Context = createContext<{
  theme: ThemeType
  updateTheme: (t: ThemeType) => void
}>({
  theme: 'ghost',
  updateTheme() {},
})

const Provider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('ghost')

  const updateTheme = (theme: ThemeType) => {
    setTheme(theme)
  }

  return (
    <Context.Provider value={{ theme, updateTheme }}>
      {children}
    </Context.Provider>
  )
}

const useTheme = () => useContext(Context)

export { useTheme, Provider as ThemeProvider }
