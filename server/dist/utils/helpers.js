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
function sortPostsAndRetweets(postsAndRetweets, option = 'latest') {
    return postsAndRetweets.sort((a, b) => {
        let aCreatedAtDate;
        let bCreatedAtDate;
        aCreatedAtDate = a.createdAt.getTime();
        bCreatedAtDate = b.createdAt.getTime();
        if (a.retweetedAt) {
            aCreatedAtDate = a.retweetedAt.getTime();
        }
        if (b.retweetedAt) {
            bCreatedAtDate = b.retweetedAt.getTime();
        }
        if (option == 'latest') {
            return bCreatedAtDate - aCreatedAtDate;
        }
        else if (option == 'oldest') {
            return aCreatedAtDate - bCreatedAtDate;
        }
    });
}
export { sortBookmarks, sortPostsAndRetweets };
