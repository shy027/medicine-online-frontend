import http from '@/api'
import type { informationListParm } from './InformationModel'
//列表
export const getListApi = (parm: informationListParm) => {
  return http.post('/medicine-web/information',parm)
}
