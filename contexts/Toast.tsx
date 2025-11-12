'use client';

import { createContext, useReducer, useMemo, useContext, ReactNode } from 'react';

interface ToastState {
  isOpen: boolean;
  message: string;
}

interface ToastContextValue {
  toast: ToastState;
  openToast: (message: string) => void;
  closeToast: () => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

const initialToastState: ToastState = {
  isOpen: false,
  message: '',
};

type ToastAction =
  | { type: 'SET_TOAST'; payload: string }
  | { type: 'UNSET_TOAST' };

function ToastReducer(state: ToastState, action: ToastAction): ToastState {
  switch (action.type) {
    case 'SET_TOAST': {
      return {
        isOpen: true,
        message: action.payload,
      };
    }
    case 'UNSET_TOAST': {
      return initialToastState;
    }
    default: {
      return state;
    }
  }
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(ToastReducer, initialToastState);

  const openToast = (payload: string) => {
    dispatch({ type: 'SET_TOAST', payload });
  };

  const closeToast = () => {
    dispatch({ type: 'UNSET_TOAST' });
  };

  const value = useMemo(
    () => ({ toast: state, openToast, closeToast }),
    [state]
  );

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
