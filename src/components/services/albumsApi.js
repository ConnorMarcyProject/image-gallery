const albums = [
  {
    id: 'christmas-dog',
    title: 'Christmas Dogs',
    images: [
      {
        title: 'so cute',
        url: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj-lpK2zPreAhWiqlQKHTCMDBsQjRx6BAgBEAU&url=http%3A%2F%2Fwww.freechristmaswallpapers.net%2Fcategory%2FChristmas%2BDogs%2F&psig=AOvVaw1yZAWysZWy-8e8qNwKy9DL&ust=1543615078027510'
      }
    ]
  },
  {
    id: 'halloween-dog',
    title: 'Halloween Dogs',
    images: [
      {
        title: 'ferocious',
        url: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiQ2YThzfreAhVBjlQKHbq6C4UQjRx6BAgBEAU&url=https%3A%2F%2Fwww.halloweencostumes.com%2Flion-pet-costume.html&psig=AOvVaw2nDZGBOPGwZ8mtbYCxykhA&ust=1543615432666214'
      }
    ]
  },
  {
    id: 'funny-dog',
    title: 'Funny Dogs',
    images: [
      {
        title: 'funny',
        url: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwif-oOszvreAhVrs1QKHehmAS0QjRx6BAgBEAU&url=http%3A%2F%2Fwww.ba-bamail.com%2Fcontent.aspx%3Femailid%3D23166&psig=AOvVaw3Ngzjk94UV8h2vysWVXlKF&ust=1543615594148126'
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