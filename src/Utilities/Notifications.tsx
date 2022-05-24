import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type ToastStyles={
   position:string,
  autoClose: number,
  hideProgressBar: boolean,
  closeOnClick: boolean,
  pauseOnHover: boolean,
  draggable:boolean,
  progress: undefined,
}
const toastStyles:any = {
  position: "top-left",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};
const notifyError = (text:string) => toast.error(text, toastStyles);
const notifySuccess = (text:string) => toast.success(text, toastStyles);
const notifyWarn = (text:string) => toast.warn(text, toastStyles);
const notifyInfo = (text:string) => toast.info(text, toastStyles);

export { notifyError, notifySuccess, notifyInfo, notifyWarn };
