import { create } from "zustand";

interface GameQuery {
    genreID?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
}


interface GameQueryStore {
    gameQuery: GameQuery;
    setSearchText: (searchText: string) => void;
    setGenreId: (genreID: number) => void;
    setPlatformId: (platformId: number) => void;
    setSortOrder: (sortOrder: string) => void
}

const UseGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
    setPlatformId: (platformId) => set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
    setGenreId: (genreID) => set((store) => ({ gameQuery: { ...store.gameQuery, genreID } })),
    setSortOrder: (sortOrder) => set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } }))
}))

export default UseGameQueryStore;