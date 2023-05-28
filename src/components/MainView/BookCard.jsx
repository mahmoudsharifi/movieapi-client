export const BookCard = ({ book, onBookClick }) => {
    return (
        <div className="book-card">
            <h3>{book.title}</h3>
            <button onClick={onBookClick}>
                Select
            </button>
        </div>
    );
};