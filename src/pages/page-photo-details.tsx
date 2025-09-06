import { useParams } from "react-router";
import Container from "../components/container";
import Text from "../components/text";
import type { Photo } from "../contexts/photos/modules/photo";
import Skeleton from "../components/skeleton";
import PhotosNavigator from "../contexts/photos/components/photos-navigator";
import ImagePreview from "../components/image-file-preview";
import Button from "../components/button";

export default function PagePhotoDetails(){
 const {id} = useParams()
 // Apenas para fazer o test do mock
 const isLoadingPhoto = true;
 const photo = {
  id: "123",
  title: "Olá mundo!",
  imageId: "portrait-tower.png",
  albuns: [
   {id: "2421", title: "Album 1"},
   {id: "3421", title: "Album 2"},
   {id: "8421", title: "Album 3"},
  ],
 } as Photo

 return(
  <Container>
   <header
    className="flex items-center gap-8 justify-between mb-8"
   >
    {!isLoadingPhoto ? (
     <Text variant="heading-large">{photo?.title}</Text>
    ) : (
     <Skeleton className="w-48 h-8"/>
     )
    }
    <PhotosNavigator loading={isLoadingPhoto}/>
   </header>

   <div className="grid grid-cols-[21rem] gap-24">
    <div className="flex flex-col gap-3">
     {!isLoadingPhoto ? (
      <ImagePreview 
       src={`/images/${photo?.imageId}`}
       title={photo?.title}
       imageClassName="h-[21rem]"
      />
     ) : (
      <Skeleton className="h-[21rem]"/>
     )}

     <div>
      {!isLoadingPhoto ? 
       <Button variant="destructive">Excluir</Button>
      : 
       <Skeleton className="w-20 h-10"/>
      }
     </div>
    </div>
   </div>
  </Container>
 )
}