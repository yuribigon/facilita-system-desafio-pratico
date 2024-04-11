import { ComponentProps } from "react";

interface FormButtonProps extends ComponentProps<'button'> { }

export function FormButton({ ...props }: FormButtonProps) {
    return (
        <div className="w-full p-2 flex justify-center">
            <button
                {...props}
                className={"border border-white/10 rounded-md p-1.5 bg-white/10"}
            />
        </div>
    )
}