import {useButton, useHover} from 'react-aria';
import {useRef} from 'react'
import App from "../App";

export function MenuButton(props) {
    let ref = useRef();
    let {buttonProps, isPressed} = useButton({
        ...props,
        elementType: 'span',
    }, ref);
    let { hoverProps, isHovered } = useHover({

    });

    return (
        <span
            {...buttonProps}
            {...hoverProps}

            style={{
                opacity: isHovered? 0.7 : 1,
                background: isPressed ? 'red' : 'blue',
                color: 'white',
                cursor: 'pointer',
                padding: '7px',
                fontSize: '15px',
                borderRadius: '5px',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                ...props.style,
            }}
            ref={ref}
        >
      {props.children}
    </span>
    );
}
