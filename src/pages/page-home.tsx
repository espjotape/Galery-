import Container from "../components/container";
import PhotoList from "../contexts/photos/components/photo-list";
import AlbumsFilter from "../contexts/photos/album/components/albums-filter";

export default function PageHome() {
 return (
  <Container>
   <AlbumsFilter 
    albums={[
      {id: "3421", title: "album 1"},
      {id: "3821", title: "album 2"},
      {id: "3621", title: "album 3"}
    ]} 
    className="mb-9"
    loading
   />

   <PhotoList 
    photos={[
     {
      id: "123",
      title: "Olá mundo!",
      imageId: "portrait-tower.png",
      albums: [
       {id: "3421", title: "album 1"},
       {id: "3821", title: "album 2"},
       {id: "3621", title: "album 3"},
      ]
     }
    ]}
    
   />
  </Container>
 )
}