import * as React from 'react';

export interface BanPressImgProps {
  src: any
  onClick?: () => void
  className: string
  alt?: string
}

export default class BanPressImg extends React.Component<BanPressImgProps> {
  private img;
  private mask;

  componentDidMount() {
    this.img.addEventListener('touchstart', e => {
      e.preventDefault();
    });
    this.img.addEventListener('load', () => {
      const width = this.img.offsetWidth;
      const height = this.img.offsetHeight;
      const left = this.img.offsetLeft;
      const top = this.img.offsetTop;
      this.mask.style.width = `${width}px`;
      this.mask.style.height = `${height}px`;
      this.mask.style.left = `${left}px`;
      this.mask.style.top = `${top}px`;
      this.mask.style.position = `absolute`;
      this.mask.className = this.img.className.replace('ban-press-mask', '');
    });
  }

  public render() {
    const {src, className, onClick, alt} = this.props;
    return (
      <React.Fragment>
        <img alt={alt} onClick={onClick} ref={ele => this.img = ele} src={src} className={`ban-long-press ${className}`} />
        <div onClick={onClick} ref={ele => this.mask = ele} className="ban-press-mask" />
      </React.Fragment>
    );
  }
}
