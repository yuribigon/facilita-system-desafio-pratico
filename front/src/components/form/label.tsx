import { ComponentProps } from "react";

interface LabelProps extends ComponentProps<'label'> {}

export function Label(props: LabelProps) {
    return (
        <div className="p-2">
            <label className="w-5" {...props} />
        </div>
    )
}