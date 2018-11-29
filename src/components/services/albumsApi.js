const albums = [
  {
    id: 'christmas-dog',
    title: 'Christmas Dogs',
    images: [
      {
        title: 'Dog in Lights',
        url: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2014/08/12215859/dog-christmas-decorating-800x534.jpg'
      },
      {
        title: 'Dog Presents',
        url: 'https://topdogtips.com/wp-content/uploads/2015/12/Cheap-Dog-Supplies-Best-Christmas-Discounts-for-Dogs.jpg'
      },
      {
        title: 'Coffee Dog',
        url: 'https://3milliondogs.com/blog-assets-two/2014/12/new-christmas-dog-wallpaper.jpg'
      },
      {
        title: 'Buddy Dogs',
        url: 'https://www.kevinandamanda.com/whatsnew/wp-content/uploads/2014/12/miley-howie-boston-terriers-puppies-dogs-christmas-dressed-up-santa-reindeer-2014-01.jpg'
      },
    ]
  },
  {
    id: 'halloween-dog',
    title: 'Halloween Dogs',
    images: [
      {
        title: 'So Ferocious',
        url: 'https://images.halloweencostumes.com/products/15020/1-1/lion-pet-costume.jpg'
      },
      {
        title: 'Harry Potter Dogs',
        url: 'https://imgix.bustle.com/uploads/image/2018/10/26/28356719-5f55-4223-9807-21ae0e868e5a-large_608e4c0296e37867b4de6170f585e601.jpeg?w=945&h=574&fit=crop&crop=faces&auto=format&q=70'
      },
      {
        title: 'Spooky Dog',
        url: 'https://i.imgur.com/3r6AA4c.jpg'
      },
      {
        title: 'Halloween Spooky Baby Puppy Cuddly Witch',
        url: 'https://d3pz1jifuab5zg.cloudfront.net/2015/10/28105421/halloween-dog-puppy-witch-shutterstock_734121529.jpg'
      },
      {
        title: 'Spooky Cub Bear',
        url: 'https://files.slack.com/files-pri/T6FCZF1HR-FEFMBQY3C/cub-halloween.png'
      },
    ]
  },
  {
    id: 'funny-dog',
    title: 'Funny Dogs',
    images: [
      {
        title: 'Devil and Angel',
        url: 'http://en.bcdn.biz/Images/2016/10/31/c394f46b-0b33-42c3-94e5-3568ab57aa29.jpg'
      },
      {
        title: 'Sucked in Dog',
        url: 'https://i.ytimg.com/vi/H8zXii3kOBI/maxresdefault.jpg'
      },
      {
        title: 'Derp Nose',
        url: 'https://i.redd.it/ojdw44rdr15y.jpg'
      },
      {
        title: 'Taxi Dog',
        url: 'https://a.spirited.media/wp-content/uploads/sites/2/2015/01/so-where-can-i-take-ya-taxi-dog.jpg'
      },
      {
        title: 'Can I Has Ball?',
        url: 'https://img.cutenesscdn.com/640/ppds/8da7fa4a-0113-4928-94ca-6de4456f67e4.jpg'
      },
      {
        title: 'Sexy Dogs',
        url: 'https://ruinmyweek.com/wp-content/uploads/2016/03/the-best-funny-pictures-Dogs-in-Pantyhose-2.png'
      },
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