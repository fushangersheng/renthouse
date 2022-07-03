import axios from '@/utils/request'
export const groups = () =>
  axios({
    url: '/home/groups'
  })
