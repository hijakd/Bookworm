export default class DataManager {
  static myInstance = null;
  userID = "";

  books = [
    {
      userid: "user1",
      bookid: 1,
      title: "Harry Potter",
      subtitle: "read on the train",
      image: require("../assets/images/Book2Cover.jpeg"),
      category: "Fiction",
    },
    {
      userid: "user1",
      bookid: 2,
      title: "Game of Thrones",
      subtitle: "read on the bus",
      image: require("../assets/images/Book1Cover.jpg"),
      category: "Fiction",
    },
    {
      userid: "user2",
      bookid: 3,
      title: "Harry Potter",
      subtitle: "read on the train",
      image: require("../assets/images/Book2Cover.jpeg"),
      category: "Fiction",
    },
  ];

  static getInstance() {
    if (DataManager.myInstance == null) {
      DataManager.myInstance = new DataManager();
    }
    return this.myInstance;
  }

  getUserID() {
    return this.userID;
  }

  getBooks(id) {
    return this.books.filter((book) => book.userid === id);
  }

  setUserID(id) {
    this.userID = id;
  }

  addBook(book){
    this.books.push(book);
  }
}