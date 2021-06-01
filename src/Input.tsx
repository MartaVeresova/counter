import s from './App.module.css';
import React, {ChangeEvent} from 'react';

export type InputType = {
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    text: string
    startValue: number
    maxValue: number
    start: boolean
}

export function Input(props: InputType) {

    const classNameInput =
        props.value < 0
        || props.startValue >= props.maxValue
        || props.maxValue === 0


    return (
        <div className={s.spanAndInput}>
            <span className={s.span}>{props.text}</span>
            <input
                className={classNameInput && !props.start ? s.errorInput: s.input}
                type="number"
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}