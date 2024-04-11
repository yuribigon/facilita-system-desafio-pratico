import { ComponentProps } from "react";

interface InputProps extends ComponentProps<'input'> {}

export function Input(props: InputProps) {
    return (
        <div className="w-100 px-2">
            <input className="w-full text-black" {...props} />
        </div>
    )
}