export const selectLibrary = (libraryId) => {
    return {
        type: 'Select_library',
        payload: libraryId
    }
}