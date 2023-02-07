function sortBookmarks(bookmarks, sortOption) {
    switch (sortOption) {
        case 'Latest':
            return bookmarks.sort((a, b) => {
                const aSaveDate = a.saves[0].savedAt.getTime();
                const bSaveDate = b.saves[0].savedAt.getTime();
                return bSaveDate - aSaveDate;
            });
        case 'Oldest':
            return bookmarks.sort((a, b) => {
                const aSaveDate = a.saves[0].savedAt.getTime();
                const bSaveDate = b.saves[0].savedAt.getTime();
                return aSaveDate - bSaveDate;
            });
        case 'Top':
            return bookmarks.sort((a, b) => {
                const aAmountLikes = a.likes.length;
                const bAmountLikes = b.likes.length;
                return bAmountLikes - aAmountLikes;
            });
        case 'Media':
            return bookmarks.filter((bookmark) => {
                return bookmark.image !== '';
            });
        default:
            break;
    }
}
export { sortBookmarks };
