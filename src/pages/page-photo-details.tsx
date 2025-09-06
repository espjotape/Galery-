import { useParams } from "react-router";
import Container from "../components/container";
import Text from "../components/text";
import type { Photo } from "../contexts/photos/modules/photo";
import Skeleton from "../components/skeleton";
import PhotosNavigator from "../contexts/photos/components/photos-navigator";

export default function PagePhotoDetails(){
 const {id} = useParams()
 // Apenas para fazer o test do mock
 const isLoadingPhoto = false;
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
  </Container>
 )
}