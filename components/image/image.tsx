import NextImage from 'next/image'
export default function Image(props: any){

    return <NextImage {...props} lazy width={150} height={150}/>
}