import * as React from 'react';
export interface BanPressImgProps {
    src: any;
    onClick?: () => void;
    className: string;
    alt?: string;
}
export default class BanPressImg extends React.Component<BanPressImgProps> {
    private img;
    private mask;
    componentDidMount(): void;
    render(): JSX.Element;
}
