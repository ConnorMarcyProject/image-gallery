import VueRouter from 'vue-router'; 
import Home from './components/home/Home'; 
import Albums from './components/albums/Albums'; 
import AlbumDetail from './components/albums/AlbumDetail'; 
import AboutUs from './components/aboutUs/AboutUs';
import NewAlbum from './components/albums/NewAlbum'; 
import Thumbnails from './components/albums/images/Thumbnails'; 
import ListView from './components/albums/images/ListView'; 
import GalleryView from './components/albums/images/GalleryView'; 

export default new VueRouter ({
  routes: [

    { path: '/', component: Home },
    { path: '/albums', component: Albums },
    { path: '/albums/:id', component: AlbumDetail },
    { path: '/aboutUs', component: AboutUs },
    { path:'*', redirect: '/' }
  ]
}); 