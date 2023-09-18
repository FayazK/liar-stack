import { atom } from 'recoil'

export const DataTableParamsAtom = atom({
  default: {}, key: 'DataTableParamsAtom',
})

export const DataTableRefreshAtom = atom({
  default: 0, key: 'DataTableRefreshAtom',
})
