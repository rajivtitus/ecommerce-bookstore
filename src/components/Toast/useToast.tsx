import {
  createContext,
  useContext,
  useState,
  RefObject,
  ReactNode,
} from "react";
import classNames from "classnames";

import {
  ToastContextType,
  ToastPositionType,
  ToastProps,
  positionClasses,
} from "../../utils/types";
import Toast from "./Toast";

interface Props {
  children?: ReactNode;
}

const ToastContext = createContext<ToastContextType>({
  addToast: () => {},
  removeToast: () => {},
  position: "topRight",
});

const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }: Props) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  const [position, setPosition] = useState<ToastPositionType>("topRight");

  const addToast = (toast: Omit<ToastProps, "id">) => {
    //first check for position
    if (toast.position && toast.position !== position) {
      setPosition(toast.position);
    }
    // add it to the list
    setToasts((toasts) => [...toasts, { ...toast, id: Math.random() * 10000 }]);
  };

  const removeToast = (toastId: number, ref: RefObject<HTMLDivElement>) => {
    ref?.current?.classList.add("animate-toastOut");
    //remove element after animation is done
    ref?.current?.addEventListener("animationend", () => {
      // lets remove it
      setToasts((toasts) => toasts.filter((toast) => toast.id !== toastId));
    });
  };

  return (
    <div>
      <ToastContext.Provider value={{ addToast, removeToast, position }}>
        {children}
        {/* toast list */}
        <div
          className={classNames(
            positionClasses[position],
            "fixed w-screen max-w-xs z-50"
          )}
        >
          {toasts.map((toast) => (
            <Toast key={toast.id} {...toast} />
          ))}
        </div>
      </ToastContext.Provider>
    </div>
  );
};

export default useToast;
