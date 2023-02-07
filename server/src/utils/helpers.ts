function sortBookmarks(bookmarks: any, sortOption: string) {
  switch (sortOption) {
    case 'Latest':
      return bookmarks.sort((a: any, b: any) => {
        const aSaveDate = a.saves[0].savedAt.getTime();
        const bSaveDate = b.saves[0].savedAt.getTime();

        return bSaveDate - aSaveDate;
      });
    case 'Oldest':
      return bookmarks.sort((a: any, b: any) => {
        const aSaveDate = a.saves[0].savedAt.getTime();
        const bSaveDate = b.saves[0].savedAt.getTime();

        return aSaveDate - bSaveDate;
      });
    case 'Top':
      return bookmarks.sort((a: any, b: any) => {
        const aAmountLikes = a.likes.length;
        const bAmountLikes = b.likes.length;

        return bAmountLikes - aAmountLikes;
      });
    case 'Media':
      return bookmarks.filter((bookmark: any) => {
        return bookmark.image !== '';
      });
    default:
      break;
  }
}


export { sortBookmarks };
