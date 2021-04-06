import { Categories } from '../features/vocabulary/vocabularySlice';

const findWordById = (category: Categories, wordId: string) => {
    if (category.words) {
        return category.words.filter((item) => {
            return item.id === wordId;
        })
    } else {
        return [];
    }
}

export default findWordById;