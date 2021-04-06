import { Categories } from '../features/vocubulary/vocubularySlice';

const findCategoryByName = (categories: Categories[], name: string) => {
    return categories.filter(item => {
        return item.name === name;
    })
}

export default findCategoryByName;