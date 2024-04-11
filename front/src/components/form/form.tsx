import { ComponentProps } from "react";

interface FormProps extends ComponentProps<'form'> {}

export function Form(props: FormProps) {
    return (
        <div className="border border-white/10 rounded-lg">
            <form className="w-full" {...props} />
        </div>
    )
}