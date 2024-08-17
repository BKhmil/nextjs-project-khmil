import {FC} from "react";

interface IProps {
    message: string;
}

const ErrorBox:FC<IProps> = ({message}) => {
    return <div className='mx-auto text-red-500 text-2xl'>{message}</div>;
};

export default ErrorBox;