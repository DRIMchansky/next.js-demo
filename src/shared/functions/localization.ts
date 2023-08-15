import { NavData } from '../types'

export const updateNavLabels = (navData: NavData, content: Record<string, string>) => {
  return navData.map(data => {
    const resData = { ...data }
    if (resData.localeId && resData.localeId in content) {
      resData.label = content[resData.localeId]
    }

    if (resData.subitems) {
      resData.subitems.map(item => {
        if (item.localeId && item.localeId in content) {
          item.label = content[item.localeId]
        }
        return item
      })
    }

    return resData
  })
}
