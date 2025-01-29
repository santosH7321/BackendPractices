const allBooks = [
    {
        id: "book1",
        title: "Book 1",
        author: "Author 1",
        publicationYear: 2000,
        genre: "Fiction",
        image: "https://images.pexels.com/photos/5331071/pexels-photo-5331071.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: "book2",
        title: "Book 2",
        author: "Author 2",
        publicationYear: 2010,
        genre: "Non-Fiction",
        image: "https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: "book3",
        title: "Book 3",
        author: "Author 3",
        publicationYear: 2015,
        genre: "Fiction",
        image: "https://images.pexels.com/photos/762686/pexels-photo-762686.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: "book4",
        title: "Book 4",
        author: "Author 4",
        publicationYear: 2020,
        genre: "Non-Fiction",
        image: "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: "book5",
        title: "Book 5",
        author: "Author 5",
        publicationYear: 2005,
        genre: "Non-Fiction",
        image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: "book6",
        title: "Book 6",
        author: "Author 6",
        publicationYear: 2012,
        genre: "Fiction",
        image: "https://images.pexels.com/photos/4581325/pexels-photo-4581325.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: "book7",
        title: "Book 7",
        author: "Author 7",
        publicationYear: 2017,
        genre: "Non-Fiction",
        image: "https://images.pexels.com/photos/5243356/pexels-photo-5243356.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: "book8",
        title: "Book 8",
        author: "Author 8",
        publicationYear: 2018,
        genre: "Fiction",
        image: "https://images.pexels.com/photos/3599084/pexels-photo-3599084.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: "book9",
        title: "Book 9",
        author: "Author 9",
        publicationYear: 2021,
        genre: "Non-Fiction",
        image: "https://images.pexels.com/photos/5243356/pexels-photo-5243356.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: "book10",
        title: "Book 10",
        author: "Author 10",
        publicationYear: 2016,
        genre: "Fiction",
        image: "https://images.pexels.com/photos/3599084/pexels-photo-3599084.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
];

const bookContainer = document.querySelector(".books-container");

// Create a document fragment to batch append elements
const fragment = document.createDocumentFragment();

allBooks.forEach(book => {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book-div";

    const bookTitle = document.createElement("h3");
    bookTitle.className = "book-title";
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement("h4");
    bookAuthor.className = "book-author";
    bookAuthor.textContent = book.author;

    const bookPublicationYear = document.createElement("h5");
    bookPublicationYear.className = "book-publication-year";
    bookPublicationYear.textContent = book.publicationYear;

    const bookGenre = document.createElement("h6");
    bookGenre.className = "book-genre";
    bookGenre.textContent = book.genre;

    const bookImage = document.createElement("img");
    bookImage.src = book.image;
    bookImage.alt = book.title; // Add alt text for accessibility

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPublicationYear);
    bookDiv.appendChild(bookGenre);
    bookDiv.appendChild(bookImage);

    fragment.appendChild(bookDiv);
});

// Append all book elements to the container at once
bookContainer.appendChild(fragment);