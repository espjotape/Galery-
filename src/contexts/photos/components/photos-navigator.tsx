import type React from "react";
import Skeleton from "../../../components/skeleton";
import ArrowLeft from "../../../assets/icons/chevron-left.svg?react"
import ArrowRight from "../../../assets/icons/chevron-right.svg?react"
import ButtonIcon from "../../../components/button-icon";
import Button from "../../../components/button";
import { useNavigate } from "react-router";
import cx from "classnames"

interface PhotosNavigatorProps extends React.ComponentProps<"div">{
 previousPhotoId?: string;
 nextPhotoId?: string;
 loading?: boolean;
}

export default function PhotoNavigator({ 
 previousPhotoId, 
 nextPhotoId, 
 loading, 
 className, 
 ...props
} : PhotosNavigatorProps) {
 const navigate = useNavigate();

 return (
  <div className={cx("flex gap-2", className)} {...props}>
   {!loading ? (
    <>
     <ButtonIcon 
      icon={ArrowLeft}
      variant="secondary"
      disabled={!previousPhotoId}
      onClick={() => {
       navigate(`/fotos/${previousPhotoId}`)
      }}
     />
     <Button
      icon={ArrowRight}
      variant="secondary"
      disabled={!nextPhotoId}
      onClick={() => {
       navigate(`/fotos/${nextPhotoId}`)
      }}
     >
      Proxima imagem
     </Button>
    </>
   ) : (
    <>
     <Skeleton className="w-10 h-10"/>
     <Skeleton className="w-20 h-10"/>
    </>
   )}
  </div>
 )
}