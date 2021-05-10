import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { v4 as uuid } from "uuid";

import { ToastContainer } from "../components/Toast";

export interface ToastAction {
  id: string;
  of: string;
}

interface ToastContextProps {
  children: ReactNode;
}

interface ToastContextData {
  addToast(actions: Omit<ToastAction, "id">): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

function ToastProvider({ children }: ToastContextProps) {
  const [actions, setActions] = useState<ToastAction[]>([]);

  const addToast = useCallback(({ of }: Omit<ToastAction, "id">) => {
    const id = uuid();

    const toast = {
      id,
      of,
    };

    setActions((state) => [...state, toast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setActions((state) => state.filter((action) => action.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer actions={actions} />
    </ToastContext.Provider>
  );
}

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast deve ser usado no ToastProvider");
  }

  return context;
}

export { ToastProvider, useToast };
