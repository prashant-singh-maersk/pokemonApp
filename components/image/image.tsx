import NextImage from 'next/image';
import { useState } from 'react';
import getFallbackSrc from '../../services/getFallbackSrc';
export default function Image(props: any) {
  const { src, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <NextImage
      src={imgSrc}
      {...rest}
      width={props.width || 150}
      height={props.height || 150}
      onError={() => {
        setImgSrc(getFallbackSrc());
      }}
    />
  );
}
