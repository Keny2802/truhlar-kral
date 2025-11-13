import {
    Fragment,
    ReactNode
} from "react";

import Wrapper from "./Wrapper";

/*
možná přidání children nebo spíše parent jako react node | null
že ten rodič který bude relative a to dáme v další komponentě
ten daný wrapper s relative
*/

const DarkOverlayWrapper = () => {
    return (
        <Fragment>
            <Wrapper className="absolute inset-0 bg-black/40"></Wrapper>
        </Fragment>
    );
};

export default DarkOverlayWrapper;