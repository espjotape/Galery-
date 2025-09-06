import { tv } from "tailwind-variants";

export const ImagePreviewVariants = tv({
 base:`
  rounded-lg overflow-hidden
 `
})

export const imagePreviewVariants = tv({
 base: `
 w-full h-full object-cover
 `
})

interface ImagePreviewProps extends React.ComponentProps<"img"> {
 imageClassName?: string;
}

export default function ImagePreview({
 className,
 imageClassName,
 ...props
}:  ImagePreviewProps){
 return (
  <div className={ImagePreviewVariants({className})}>
   <img 
    className={imagePreviewVariants({className: imageClassName})} 
    {...props}
   />
  </div>
 )
}