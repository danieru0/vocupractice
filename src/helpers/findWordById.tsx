import { Categories } from '../features/vocubulary/vocubularySlice';

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