import { tv } from "tailwind-variants";
import ImagePreview from "../../../components/image-file-preview";
import React from "react";
import InputCheckbox from "../../../components/input-checkbox";

export const photoImageSelectableVariants = tv({
 base: "cursor-pointer relative rounded-lg",
 variants : {
  select: {
   true: "outline-2 outline-accent-brand"
  }
 }
})

interface PhotoImageSelectableProps 
 extends React.ComponentProps<typeof ImagePreview> {
  selected?: boolean;
  onSelectImage?: (selected : boolean) => void
 }

export function PhotoImageSelectable({
 className,
 selected,
 onSelectImage,
 ...props
} : PhotoImageSelectableProps) {
 const [isSelected, setIsSelected] = React.useState(selected)

 function handleSelect() {
  const newValue = !isSelected;
  setIsSelected?.(newValue)
  onSelectImage?.(newValue)
 }

 return (
  <label
   className={photoImageSelectableVariants({
    className, 
    select: isSelected
   })}
  >
   <InputCheckbox 
    size="sm"
    checked={isSelected}
    onChange={handleSelect}
    className="absolute top-1 left-1"
   />
   <ImagePreview className="w-20 h-20 rounded" {...props}/>
  </label>
 )
}