import { TextareaHTMLAttributes } from "react";
import utilStyles from '../../styles/utils.module.scss'
// TextAreaHTMLAttributes imports all props a input can use. You use ...rest to apply them to your import.

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
  name: string;
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({name, ...rest}) => {
  return (
    <div className={utilStyles.inputContainer}>
      <textarea id={name} {...rest}/>
    </div>
  );
}
export default Textarea;
