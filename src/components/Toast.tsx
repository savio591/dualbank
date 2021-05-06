interface ToastProps {
  of: string;
}

export function Toast({ of }: ToastProps) {
  return (
    <div>
      <span>
        Número da {of} copiado.
      </span>
    </div>
  );
}
