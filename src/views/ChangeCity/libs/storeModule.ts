import { Module } from 'vuex'
import { IRootState } from '@/libs/rootStore'
import extenseStoreModule from '@/libs/createSubModule'

const namespace = 'changeCity';

interface IState {
    cityList: Object,
}

const module: Module<IState, IRootState> = {
    namespaced: true,
}

extenseStoreModule({
    module,
    fetchItems: [
        { name: 'cityList', fetchApi: '', useCache: true, useLoading: false }
    ]
})

export { namespace, module }