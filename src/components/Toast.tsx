import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { useToast } from "../services/toastService";
import { ToastContainerStyle, ToastStyle } from "../styles/ToastStyle";

interface ToastAction {
  of: string;
  id: string;
}

interface ToastContainerProps {
  actions: ToastAction[];
}

interface ToastProps {
  of: string;
}

export function ToastContainer({ actions }: ToastContainerProps) {
  return (
    <ToastContainerStyle>
      {actions.map((action) => {
        return <Toast key={action.id} of={action.of} id={action.id} />;
      })}
    </ToastContainerStyle>
  );
}

export function Toast({ of, id }: ToastAction) {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, id]);

  return (
    <ToastStyle>
      <span>Número da {of} copiado.</span>
    </ToastStyle>
  );
}
