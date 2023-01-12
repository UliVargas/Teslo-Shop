import { FC, ReactNode, useReducer } from 'react'
import { UIContext, UIReducer } from './'

export interface UIState {
  isMenuOpen: boolean
}

const UI_INITIAL_STATE: UIState = {
  isMenuOpen: false
}

interface IUIProvider {
  children: ReactNode
}

export const UIProvider: FC<IUIProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE)

  const toggleSideMenu = (): void => {
    dispatch({
      type: 'UI - ToggleMenu'
    })
  }
  return (
    <UIContext.Provider
      value={{
        ...state,

        // Methods
        toggleSideMenu
      }}
    >
      {children}
    </UIContext.Provider>
  )
}
