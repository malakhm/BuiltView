import { getAllItems } from './items-util';
import { flatDeep } from '../utils/flatDeep';

export const getBlogCategories = () => {
    const blogs = getAllItems('blogs');

    const categories = flatDeep(
        blogs?.map((blog) => blog.category || 'construction')
    );

    return [...new Set(categories)];
};
