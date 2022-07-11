const movies = [
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      title: "Vikram",
      genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
      numberInStock: 8,
      dailyRentalRate: 8.5,
      publishDate: "2022"
    },
    {
      _id: "5b21ca3eeb7f6fbccd471816",
      title: "Don",
      genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
      numberInStock: 7,
      dailyRentalRate: 2.5
    },
   
    {
      _id: "5b21ca3eeb7f6fbccd471819",
      title: "Yaanai",
      genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Action" },
      numberInStock: 7,
      dailyRentalRate: 3.5
    },
    {
      _id: "5b21ca3eeb7f6fbccd47181a",
      title: "Maamanithan",
      genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
      numberInStock: 7.2,
      dailyRentalRate: 3.5
    },
    {
      _id: "5b21ca3eeb7f6fbccd47181b",
      title: "Maayon",
      genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "thriller" },
      numberInStock: 7,
      dailyRentalRate: 3.5
    },
    {
        _id: "5b21ca3eeb7f6fbccd471817",
        title: "Beast",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Action" },
        numberInStock: 8,
        dailyRentalRate: 7.5
      },
  ];
  
  export function getTamilmovies() {
    
    return movies;
  }
  
  
  