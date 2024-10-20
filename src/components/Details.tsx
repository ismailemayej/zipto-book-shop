import { TBook } from "../App";

const Details = ({ book }: { book: TBook }) => {
  return (
    <div className="w-full bg-gray-100 p-4 mt-2 rounded-lg text-left transition-all duration-300 ease-in-out">
      {/* for book Id */}
      <p className="text-xl">
        <span className="font-bold">ID:</span> {book.id}
      </p>
      {/* for book Title */}
      <p className="text-lg">
        <span className="font-bold">Title:</span> {book.title}
      </p>
      {/* for book Author Name */}
      <p className="text-lg">
        <span className="font-bold">Author:</span>
        {book.authors.map((author) => author.name).join(", ")}
      </p>
      {/* for book Topic */}
      <p className="text-lg">
        <span className="font-bold">Genre:</span>
        {book.subjects && book.subjects.length > 0
          ? book.subjects.join(", ")
          : "Unknown"}
      </p>
      <p className="text-lg">
        <span className="font-bold">Bookshelves:</span>
        {book.bookshelves && book.bookshelves.length > 0
          ? book.bookshelves.join(", ")
          : "None"}
      </p>
    </div>
  );
};

export default Details;
