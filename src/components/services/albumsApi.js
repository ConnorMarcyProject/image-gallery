const albums = [
  {
    id: 'christmas-dog',
    title: 'Christmas Dogs',
    images: [
      {
        title: 'Dog in Lights',
        url: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2014/08/12215859/dog-christmas-decorating-800x534.jpg'
      }
    ]
  },
  {
    id: 'halloween-dog',
    title: 'Halloween Dogs',
    images: [
      {
        title: 'So Ferocious',
        url: 'https://images.halloweencostumes.com/products/15020/1-1/lion-pet-costume.jpg'
      }
    ]
  },
  {
    id: 'funny-dog',
    title: 'Funny Dogs',
    images: [
      {
        title: 'Devil and Angel',
        url: 'http://en.bcdn.biz/Images/2016/10/31/c394f46b-0b33-42c3-94e5-3568ab57aa29.jpg'
      }
    ]
  }
];

export default {
  getAlbums() {
    return albums;
  },
  getAlbum(id) {
    return albums.find(album => album.id === id);
  }
};