import { InputHTMLAttributes } from "react";

import utilStyles from '../../styles/utils.module.scss';

// InputHTMLAttributes imports all props a input can use. You use ...rest to apply them to your import.

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  label: string;
  checkbox?: boolean;
}

const Input: React.FC<InputProps> = ({name, label, checkbox, ...rest}) => {
  return (
    <div className={`${checkbox ? utilStyles.checkbox : utilStyles.inputContainer}`}>
      { label ? <label htmlFor="isSiteOn"> Site is on: </label> : null }
      <input type='text' id={name} {...rest}/>
    </div>
  );
}
export default Input;
