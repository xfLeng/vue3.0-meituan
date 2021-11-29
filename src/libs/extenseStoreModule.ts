import { Module } from 'vuex';
// import { showLoading, hideLoading } from './functions';

interface IFetchOption {
    // state字段名
    name: string,
    // 获取数据的Axios API方法
    // eslint-disable-next-line no-unused-vars
    fetchApi(params: unknown): any,
    // 已获取过的数据，是否直接返回，默认false
    useCache?: boolean,
    // 是否开启Loading，默认为true
    useLoading?: boolean,
}

interface IFetchOptions {
    // store module
    module: Module<any, any>,
    // 需添加的fetch对象
    fetchItem: IFetchOption | Array<IFetchOption>,
}

// 为传入的store module自动添加根据api获取数据的功能
// 会在module的state中插入一个属性，在mutations中插入一个set方法，在actions中插入一个异步获取数据并set到state的方法
const extenseStoreModule = (options: IFetchOptions): void => {
    const {
        module, fetchItem,
    } = options;
    const fetchItems = Array.isArray(fetchItem) ? fetchItem : [fetchItem];
    fetchItems.forEach((item) => {
        const {
            name, fetchApi, useCache, useLoading,
        } = item;
        if (!name) {
            return;
        }
        const [firstName, ...restName] = name;
        const upperName = `${firstName.toUpperCase()}${restName.join('')}`;
        const fetchName = `fetch${upperName}`;
        const setName = `set${upperName}`;
        const stateName = `${firstName.toLowerCase()}${restName.join('')}`;
        module.actions = module.actions || {};
        module.mutations = module.mutations || {};
        module.state = module.state || {};
        if (
            !module.actions[fetchName]
            && !module.mutations[setName]
            && !module.state[stateName]
        ) {
            module.state[stateName] = null;
            module.mutations[setName] = (state, data) => {
                state[stateName] = data;
            };
            module.actions[fetchName] = async ({
                dispatch, commit, state, rootState,
            }: any, params: any): Promise<unknown> => {
                if (useCache) {
                    if (state[stateName]) {
                        return state[stateName];
                    }
                }
                if (useLoading !== false) {
                    // showLoading();
                }
                let reqData = { ...params };
                const { code, data } = await fetchApi(reqData);
                if (useLoading !== false) {
                    // hideLoading();
                }
                if (code === 'success') {
                    commit(setName, data);
                    return data;
                }
                return null;
            };
        }
    });
};

export default extenseStoreModule
