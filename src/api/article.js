/**
 * 修改排序
 */
export const articleSort = data => {
  return request({
    url: '/article/sort',
    method: 'POST',
    data
  })
}
