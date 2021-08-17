
import { useEffect, useRef } from "react";

const AnimatedRouter = ({
    children
}) => {

    const wrapper = useRef(null);

    useEffect(() => {
        const wrapperDiv = wrapper.current;
        wrapperDiv.classList.add('in');
        return () => {
            wrapperDiv.classList.remove('in');
        }
    }, []);


    return (
        <div className="route-wrapper d-flex flex-column flex-root" ref={wrapper}>
            <div className="route-wrapper--content d-flex flex-column flex-root">
                {children}
            </div>
        </div>
    );
}

export default AnimatedRouter;