/*
 * @Author: edith Edith_luckend@163.com
 * @Date: 2022-12-10 15:35:45
 * @LastEditors: edith Edith_luckend@163.com
 * @LastEditTime: 2022-12-10 15:52:36
 * @FilePath: \time-of-year-web\src\utils\server.ts
 * @Description: server
 * Copyright (c) 2022 by edith Edith_luckend@163.com, All Rights Reserved.
 */

import axios from 'axios'
const testUrl = 'http://127.0.0.1:3000/api'

export function get (url: string) {
  return axios(testUrl + url)
}
