"use client";

import { useEffect, useState } from "react";

interface SwitchProps {
    id: string;
    label: string;
    disabled?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
}

const Switch = (props: SwitchProps) => {
    const [checked, setChecked] = useState<boolean>(
        props.defaultChecked || false
    );

    const toggleSwitch = () => {
        if (!props.disabled) {
            setChecked((prev) => !prev);
        }
    };

    useEffect(() => {
        if (props.onChange) {
            props.onChange(checked);
        }
    }, [checked]);

    return (
        <div className="flex items-center space-x-2">
            <button
                id={props.id}
                type="button"
                role="switch"
                aria-checked={checked ? "true" : "false"}
                data-state={checked ? "checked" : "unchecked"}
                value={checked ? "on" : "off"}
                className={`peer inline-flex h-5 w-9 shrink-0 cursor-pointer 
                    items-center rounded-full border-2 border-transparent 
                    focus:outline-none shadow-sm transition-colors 
                    
                    disabled:cursor-not-allowed disabled:opacity-50 
                    
                    ${checked ? "bg-drd-primary" : "bg-zinc-200"}
                    `}
                onClick={toggleSwitch}
                disabled={props.disabled}>
                <span
                    data-state={checked ? "checked" : "unchecked"}
                    className={`pointer-events-none block h-4 w-4 rounded-full 
                        bg-white shadow-lg ring-0 transition-transform ${
                            checked ? "translate-x-4" : "translate-x-0"
                        }`}></span>
            </button>
            <label
                className="text-sm text-drd-neutral-800 font-medium leading-none
                cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor={props.id}>
                {props.label}
            </label>
        </div>
    );
};

export default Switch;
