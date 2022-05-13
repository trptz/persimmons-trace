import api from "../../lib/api/sample/$api";
import axiosClient from '@aspida/axios'


export const client = api(axiosClient())

