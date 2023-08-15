import { NavData } from '../types'

export const localizeNavData = (navData: NavData, headers: Record<string, string>) => {
  return (
    navData?.map(data => {
      const resData = { ...data }
      if (resData.localeId && resData.localeId in headers) {
        resData.label = headers[resData.localeId]
      }

      if (resData.subitems) {
        resData.subitems.map(item => {
          if (item.localeId && item.localeId in headers) {
            item.label = headers[item.localeId]
          }
          return item
        })
      }

      return resData
    }) || []
  )
}
