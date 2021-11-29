import { createStore, ModuleTree } from 'vuex'
import rootStore from './rootStore'

export interface IStoreModule {
    namespace: string,
    module: any
}

const modules: ModuleTree<any> = <ModuleTree<any>>{}

const modulesImports = (<any>(import.meta)).globEager('../views/**/storeModule.ts')
Object.values(modulesImports).forEach((module) => {
    modules[(<IStoreModule>module).namespace] = (<IStoreModule>module).module
})

rootStore.modules = modules

export default createStore(rootStore)

