import React, { Fragment } from "react";

type Props = {
    show: boolean;
}

export const If = (props: Props) => (
    <Fragment>{props.show ? props.children : null}</Fragment>
);

If.defaultProps = {
    show: true
}

